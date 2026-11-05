import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const MODEL_FILES = {
    name: "./breakdance-ending.glb",
    selection: "./hip-hop-dance.glb",
    results: "./samba-dancing.glb"
};

const DRACO_DECODER_PATH =
    "https://www.gstatic.com/draco/versioned/decoders/1.5.7/";

const STAGE_MESSAGES = {
    name: "Hii! 👋",
    selection: "Hmm... which test? 🤔",
    results: "You did it! 🎉"
};

let scene;
let camera;
let renderer;
let clock;
let mixer;
let currentModel;
let currentStage = "name";
let loadToken = 0;

const loadedModels = new Map();

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(DRACO_DECODER_PATH);
dracoLoader.setDecoderConfig({ type: "wasm" });
dracoLoader.preload();

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

function setBoyMessage(message) {
    const bubble = document.getElementById("boyMessage");
    if (!bubble) return;

    bubble.textContent = message;
    bubble.classList.remove("hidden");
}

function triggerBoyExpression(expression) {
    const messages = {
        wave: "Hii! 👋",
        walk: "Let's get started!",
        "look-down": "Add your name here",
        thinking: "Hmm... which test? 🤔",
        "thumbs-up": "All the best! 👍",
        dance: "You did it! 🎉"
    };

    setBoyMessage(messages[expression] || STAGE_MESSAGES[currentStage]);

    if (expression === "thinking" || expression === "look-down") {
        setCharacterStage("selection");
    } else if (expression === "dance") {
        setCharacterStage("results");
    }
}

window.triggerBoyExpression = triggerBoyExpression;

function frameModel(model) {
    model.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const height = size.y || 1;
    const scale = 1.8 / height;

    model.scale.setScalar(scale);
    model.position.set(
        -center.x * scale,
        -bounds.min.y * scale - 0.75,
        -center.z * scale
    );

    camera.position.set(0, 1.05, 5.1);
    camera.lookAt(0, 0.1, 0);
}

function showLoadedModel(stage, gltf) {
    if (mixer) {
        mixer.stopAllAction();
        mixer = null;
    }

    if (currentModel) {
        scene.remove(currentModel);
    }

    currentModel = gltf.scene;
    frameModel(currentModel);
    scene.add(currentModel);

    if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(currentModel);

        const action = mixer.clipAction(gltf.animations[0]);
        action.reset();
        action.setLoop(THREE.LoopRepeat);
        action.play();

        console.info(
            `${stage} animation clips:`,
            gltf.animations.map((clip) => clip.name)
        );
    } else {
        console.info(`${stage} model has no animation clips.`);
    }

    setBoyMessage(STAGE_MESSAGES[stage]);
}

function loadStageModel(stage) {
    const modelUrl = MODEL_FILES[stage];
    if (!modelUrl || !scene) return;

    const token = ++loadToken;
    setBoyMessage(`Loading ${stage === "results" ? "celebration" : "character"}…`);

    const cachedModel = loadedModels.get(stage);
    if (cachedModel) {
        if (token === loadToken) {
            showLoadedModel(stage, cachedModel);
        }
        return;
    }

    gltfLoader.load(
        modelUrl,
        (gltf) => {
            loadedModels.set(stage, gltf);
            if (token !== loadToken) return;
            showLoadedModel(stage, gltf);
        },
        undefined,
        (error) => {
            if (token !== loadToken) return;

            console.error(`Could not load ${modelUrl}:`, error);
            setBoyMessage("Character unavailable — you can continue.");
        }
    );
}

function setCharacterStage(stage) {
    if (!MODEL_FILES[stage]) return;

    currentStage = stage;
    localStorage.setItem("characterStage", stage);
    setBoyMessage(STAGE_MESSAGES[stage]);
    loadStageModel(stage);
}

window.setCharacterStage = setCharacterStage;

window.addEventListener("character-stage-change", (event) => {
    if (event.detail?.stage) {
        setCharacterStage(event.detail.stage);
    }
});

function initCharacter() {
    const viewport = document.getElementById("threeJsCanvas");
    if (!viewport) {
        console.error("Could not find #threeJsCanvas.");
        return;
    }

    const width = viewport.clientWidth || 300;
    const height = viewport.clientHeight || 290;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 1.05, 5.1);
    camera.lookAt(0, 0.1, 0);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    viewport.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x55566b, 2));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLight.position.set(-3, 2, 3);
    scene.add(fillLight);

    clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        if (mixer) mixer.update(clock.getDelta());
        renderer.render(scene, camera);
    }

    animate();

    function resize() {
        const newWidth = viewport.clientWidth || 300;
        const newHeight = viewport.clientHeight || 290;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    if ("ResizeObserver" in window) {
        new ResizeObserver(resize).observe(viewport);
    } else {
        window.addEventListener("resize", resize);
    }

    setCharacterStage(currentStage);
}

initCharacter();
