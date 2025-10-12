import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
const material = new THREE.MeshBasicMaterial({color:0x8a2be2});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


camera.position.z = 5;
var x = 0.1;
var y = 0.1;
const clock = new THREE.Clock();

function animate() {
    var delta = clock.getDelta();
    cube.position.x += x * 5 * delta;
    cube.position.y += y * 5 * delta;
    cube.rotation.y += 18 * delta * (Math.PI / 180);
    console.log(cube.position.y);
    if(cube.position.x >= 5 + 0.005){
        x = -0.1;
    }
    if(cube.position.x <= -1 * 5 - 0.005){
        x = 0.1;
    }
    if(cube.position.y >= 2.5 + 0.005){
        y = -0.1;
    }
    if(cube.position.y <= -1 * 2.5 - 0.005){
        y = 0.1;
    }

    renderer.render(scene, camera);
    
}

clock.start();
renderer.setAnimationLoop(animate);