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
    if (!viewport || !window.THREE || !THREE.GLTFLoader) {
        console.error("Three.js or GLTFLoader did not load.");
        setBoyMessage("3D character could not start");
        return;
    }

    const width = viewport.clientWidth || 400;
    const height = viewport.clientHeight || 245;

    boyScene = new THREE.Scene();
    boyCamera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
    boyCamera.position.set(0, 1.2, 5);

    boyRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    boyRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    boyRenderer.setSize(width, height);
    viewport.appendChild(boyRenderer.domElement);

    boyScene.add(new THREE.HemisphereLight(0xffffff, 0x38435c, 2));

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(3, 5, 4);
    boyScene.add(light);

    boyClock = new THREE.Clock();

    const loader = new THREE.GLTFLoader();

    loader.load(
        "character.glb",
        (gltf) => {
            boyModel = gltf.scene;
            boyScene.add(boyModel);

            const bounds = new THREE.Box3().setFromObject(boyModel);
            const size = bounds.getSize(new THREE.Vector3());
            const center = bounds.getCenter(new THREE.Vector3());

            boyModel.position.sub(center);

            const largestDimension = Math.max(size.x, size.y, size.z) || 1;
            boyModel.scale.setScalar(2.1 / largestDimension);
            boyModel.position.y = -0.85;

            boyMixer = new THREE.AnimationMixer(boyModel);

            gltf.animations.forEach((clip) => {
                const clipName = clip.name.toLowerCase();
                const action = boyMixer.clipAction(clip);

                if (clipName.includes("walk")) boyActions.walk = action;
                if (clipName.includes("wave")) boyActions.wave = action;
                if (clipName.includes("think")) boyActions.thinking = action;
                if (clipName.includes("thumb")) boyActions["thumbs-up"] = action;
            });

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
        const newWidth = viewport.clientWidth;
        const newHeight = viewport.clientHeight || 245;

        boyCamera.aspect = newWidth / newHeight;
        boyCamera.updateProjectionMatrix();
        boyRenderer.setSize(newWidth, newHeight);
    });
}

window.addEventListener("load", initBoy);
