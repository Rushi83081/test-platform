import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let boyMixer;
let boyActions = {};
let activeBoyAction;
let boyScene;
let boyCamera;
let boyRenderer;
let boyClock;
let boyModel;

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
        "thumbs-up": "All the best! 👍"
    };

    setBoyMessage(messages[expression] || "Hii! 👋");

    const action = boyActions[expression];
    if (!action) return;

    if (activeBoyAction && activeBoyAction !== action) {
        activeBoyAction.fadeOut(0.25);
    }

    activeBoyAction = action;
    activeBoyAction.reset().fadeIn(0.25).play();
}

function initBoy() {
    const viewport = document.getElementById("threeJsCanvas");

    if (!viewport) {
        console.error("Could not find #threeJsCanvas.");
        return;
    }

    const width = viewport.clientWidth || 400;
    const height = viewport.clientHeight || 245;

    boyScene = new THREE.Scene();
    boyCamera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    boyCamera.position.set(0, 1.1, 4.5);
    boyCamera.lookAt(0, 0.1, 0);

    boyRenderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    boyRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    boyRenderer.setSize(width, height);
    viewport.appendChild(boyRenderer.domElement);

    boyScene.add(new THREE.HemisphereLight(0xffffff, 0x38435c, 2));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(3, 5, 4);
    boyScene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x9cc7ff, 0.8);
    fillLight.position.set(-3, 2, 3);
    boyScene.add(fillLight);

    boyClock = new THREE.Clock();

    const loader = new GLTFLoader();

    loader.load(
        "./character.glb",
        (gltf) => {
            boyModel = gltf.scene;
            boyModel.updateMatrixWorld(true);

            const bounds = new THREE.Box3().setFromObject(boyModel);
            const size = bounds.getSize(new THREE.Vector3());
            const center = bounds.getCenter(new THREE.Vector3());

            const largestDimension = Math.max(size.x, size.y, size.z) || 1;
            const scale = 2.1 / largestDimension;

            boyModel.scale.setScalar(scale);
            boyModel.position.set(
                -center.x * scale,
                -bounds.min.y * scale - 0.8,
                -center.z * scale
            );

            boyScene.add(boyModel);

            boyMixer = new THREE.AnimationMixer(boyModel);

            gltf.animations.forEach((clip) => {
                const clipName = clip.name.toLowerCase();
                const action = boyMixer.clipAction(clip);

                if (clipName.includes("walk")) {
                    boyActions.walk = action;
                } else if (clipName.includes("wave")) {
                    boyActions.wave = action;
                } else if (clipName.includes("think")) {
                    boyActions.thinking = action;
                } else if (clipName.includes("thumb")) {
                    boyActions["thumbs-up"] = action;
                } else if (clipName.includes("idle")) {
                    boyActions.walk = action;
                }
            });

            console.info("Character loaded. Model size:", size);
            console.info("Animation clips:", gltf.animations.map((clip) => clip.name));

            if (boyActions.wave) {
                triggerBoyExpression("wave");
                setTimeout(() => triggerBoyExpression("walk"), 2200);
            } else {
                triggerBoyExpression("walk");
            }
        },
        undefined,
        (error) => {
            console.error("Could not load character.glb:", error);
            setBoyMessage("Couldn't load my 3D model");
        }
    );

    function animate() {
        requestAnimationFrame(animate);

        if (boyMixer) {
            boyMixer.update(boyClock.getDelta());
        }

        boyRenderer.render(boyScene, boyCamera);
    }

    animate();

    window.addEventListener("resize", () => {
        const newWidth = viewport.clientWidth || 400;
        const newHeight = viewport.clientHeight || 245;

        boyCamera.aspect = newWidth / newHeight;
        boyCamera.updateProjectionMatrix();
        boyRenderer.setSize(newWidth, newHeight);
    });
}

initBoy();
