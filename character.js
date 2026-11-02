import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const MODEL_FILES = {
    name: "./breakdance-ending.glb",
    selection: "./hip-hop-dance.glb",
    results: "./samba-dancing.glb"
};

const MESSAGES = {
    wave: "Hii! 👋",
    walk: "Let's get started!",
    "look-down": "Add your name here",
    thinking: "Hmm... which test? 🤔",
    "thumbs-up": "All the best! 👍",
    dance: "You did it! 🎉"
};

let scene;
let camera;
let renderer;
let clock;
let mixer;
let currentModel;
let currentStage = "name";

const savedStage = localStorage.getItem("characterStage");
if (savedStage === "selection" || savedStage === "results") {
    currentStage = savedStage;
}
let loadToken = 0;
let resizeObserver;

function setBoyMessage(message) {
    const bubble = document.getElementById("boyMessage");
    if (!bubble) return;

    bubble.textContent = message;
    bubble.classList.remove("hidden");
}

function triggerBoyExpression(expression) {
    setBoyMessage(MESSAGES[expression] || MESSAGES.wave);

    if (expression === "dance") {
        setCharacterStage("results");
    } else if (expression === "thinking" || expression === "look-down") {
        setCharacterStage("selection");
    }
}

window.triggerBoyExpression = triggerBoyExpression;

function disposeCurrentModel() {
    if (!currentModel) return;

    scene.remove(currentModel);

    if (mixer) {
        mixer.stopAllAction();
        mixer = null;
    }

    currentModel.traverse((object) => {
        if (!object.isMesh) return;

        object.geometry?.dispose();

        const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

        materials.forEach((material) => {
            if (!material) return;

            for (const value of Object.values(material)) {
                if (value && value.isTexture) value.dispose();
            }

            material.dispose();
        });
    });

    currentModel = null;
}

function frameModel(model) {
    model.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());

    const height = size.y || 1;
    const scale = 2.35 / height;

    model.scale.setScalar(scale);
    model.position.set(
        -center.x * scale,
        -bounds.min.y * scale - 0.85,
        -center.z * scale
    );

    camera.position.set(0, 1.15, 4.7);
    camera.lookAt(0, 0.15, 0);
}

function loadStageModel(stage) {
    const modelUrl = MODEL_FILES[stage];
    if (!modelUrl || !scene) return;

    const token = ++loadToken;
    const loader = new GLTFLoader();

    loader.load(
        modelUrl,
        (gltf) => {
            if (token !== loadToken) {
                gltf.scene.traverse((object) => {
                    if (!object.isMesh) return;
                    object.geometry?.dispose();
                    const materials = Array.isArray(object.material)
                        ? object.material
                        : [object.material];
                    materials.forEach((material) => material?.dispose());
                });
                return;
            }

            disposeCurrentModel();
            currentModel = gltf.scene;
            frameModel(currentModel);
            scene.add(currentModel);

            if (gltf.animations.length) {
                mixer = new THREE.AnimationMixer(currentModel);

                const clips = gltf.animations;
                const chosenClip =
                    stage === "name"
                        ? clips[0]
                        : stage === "selection"
                            ? clips[0]
                            : clips[0];

                const action = mixer.clipAction(chosenClip);
                action.reset();
                action.setLoop(THREE.LoopRepeat);
                action.play();

                console.info(
                    `${stage} model animation clips:`,
                    clips.map((clip) => clip.name)
                );
            } else {
                console.info(`${stage} model has no animation clips.`);
            }
        },
        undefined,
        (error) => {
            console.error(`Could not load ${modelUrl}:`, error);
            setBoyMessage("I couldn't load my 3D model");
        }
    );
}

function setCharacterStage(stage) {
    if (!MODEL_FILES[stage]) return;

    currentStage = stage;

    const stageMessages = {
        name: MESSAGES.wave,
        selection: MESSAGES.thinking,
        results: MESSAGES.dance
    };

    setBoyMessage(stageMessages[stage]);
    loadStageModel(stage);
}

window.setCharacterStage = setCharacterStage;
window.addEventListener("character-stage-change", (event) => {
    setCharacterStage(event.detail?.stage);
});

function initCharacter() {
    const viewport = document.getElementById("threeJsCanvas");
    if (!viewport) {
        console.error("Could not find #threeJsCanvas.");
        return;
    }

    const width = viewport.clientWidth || 360;
    const height = viewport.clientHeight || 300;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 1.15, 4.7);
    camera.lookAt(0, 0.15, 0);

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
        const newWidth = viewport.clientWidth || 360;
        const newHeight = viewport.clientHeight || 300;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(viewport);
    } else {
        window.addEventListener("resize", resize);
    }

    loadStageModel(currentStage);
}

initCharacter();
