import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let loader = new GLTFLoader();
const audio = document.getElementById("myAudio");
audio.play();
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
scene.background = new THREE.Color(0xFFFFFF)




const ambientLight = new THREE.AmbientLight(0xffffff, 7); // Color, Intensity
scene.add(ambientLight);

let model
loader.load( 'model.gltf', function ( gltf ) {
    model = gltf.scene
    scene.add(gltf.scene);
    renderer.render( scene, camera );

}, undefined, function ( error ) {

	console.error( error );

} );
camera.position.z = 55;
camera.position.y = 6;

function animate() {
	requestAnimationFrame( animate );

	model.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate()
/*
let scene, camera, renderer, model;

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Handle window resize
    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // Load the 3D model (assuming you're using a GLTF format model)

}

function animate() {
    requestAnimationFrame(animate);

    if (model) model.rotation.y += 0.005; // rotate the model

    renderer.render(scene, camera);
}

*/