let scene, camera, renderer;

window.onload = (() => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);

    const controls = new THREE.OrbitControls(camera);
    controls.minDistance = 1.5;
    controls.maxDistance = 10;

    const geometry = new THREE.SphereGeometry(1, 50, 50);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('images/globemap.png');
    const earthBump = textureLoader.load('images/earthbump.jpg');
    const earthSpec = textureLoader.load('images/earthspec.png');
    const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: earthBump,
        bumpScale: 0.005,
        specularMap: earthSpec,
        specular: new THREE.Color('grey'),
        shininess: 0.3
    });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.AmbientLight( 0xcccccc ); // soft white light
    scene.add( light );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function animate() {

        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);

    };

    animate();
});

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}