//ESCENARIO

let scene;

function init() {
    const scene = new THREE.Scene();
    var loader = new THREE.TextureLoader();

    loader.load("../IMG/Fondologo.png", function (texture) {
        scene.background = texture;
    });

    //CAMARA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1);

    //RENDER
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const luz = new THREE.DirectionalLight(0xffffff, 6);
    luz.position.set(4, 8, 4);
    scene.add(luz)

    //3D
    const loader2 = new THREE.GLTFLoader();
    loader2.load("../IMG/TROLL/scene.gltf", function (gltf) {
        troll = gltf.scene.children[0];
        troll.scale.set(0.2, 0.2, 0.2);
        scene.add(gltf.scene)
        renderer.render(scene, camera);
        troll.position.y = -10
        troll.position.x = -10
    })


    const loader3 = new THREE.GLTFLoader();
    loader3.load("../IMG/Anciana/scene.gltf", function (gltf) {
        anciana = gltf.scene.children[0];
        anciana.scale.set(0.008, 0.008, 0.008);
        scene.add(gltf.scene)
        renderer.render(scene, camera);
        anciana.position.x = 2
        anciana.position.y = -2
    })

    const loader1 = new THREE.GLTFLoader();
    loader1.load("../IMG/SETH1/scene.gltf", function (gltf) {
        seth = gltf.scene.children[0];
        seth.scale.set(0.3, 0.3, 0.3);
        scene.add(gltf.scene)
        renderer.render(scene, camera);
        seth.position.x = -50
        seth.position.y = -100
    })

    const loader5 = new THREE.GLTFLoader();
    loader5.load("../IMG/TATENEN1/scene.gltf", function (gltf) {
        tatenen = gltf.scene.children[0];
        tatenen.scale.set(0.002, 0.002, 0.002);
        scene.add(gltf.scene)
        renderer.render(scene, camera);
        tatenen.position.x = 5
        tatenen.position.y = -3
        tatenen.position.z = 10
    })

    const flyControls = new THREE.FlyControls(camera, renderer.domElement)
    flyControls.movementSpeed = 50;
    flyControls.rollspeed = 50;
    flyControls.autoForward = false;
    flyControls.dragTolock = false;

    camera.position.z = 20;

    //FUNCION
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        flyControls.update(0.5)
    }
    animate();
}

init();