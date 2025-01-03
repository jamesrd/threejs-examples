import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function setup() {
	const modelFile = 'models/Avocado Model.glb';
	const modelScaleFactor = 20;
	const scene = new THREE.Scene();

	const fov = 75;
	const aspect = window.innerWidth / window.innerHeight;
	const near = 0.1;
	const far = 1000;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 5;

	var light = new THREE.HemisphereLight(0x404040, 0xFFFFFF, 10);
	scene.add(light);
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const loader = new GLTFLoader();

	loader.load(modelFile, function(gltf) {
		let sm = gltf.scene;
		sm.scale.x = modelScaleFactor;
		sm.scale.y = modelScaleFactor;
		sm.scale.z = modelScaleFactor;
		scene.add(sm);
		function animate() {
			sm.rotation.x += 0.01;
			sm.rotation.y += 0.01;
			renderer.render(scene, camera);
		}
		renderer.setAnimationLoop(animate);

	}, undefined, function(error) {

		console.error(error);

	});
}

if (!WebGL.isWebGL2Available()) {

	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById('container').appendChild(warning);
} else {
	setup();
}
