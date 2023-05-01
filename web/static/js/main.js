import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
console.log(scene)

const loader = new GLTFLoader();
loader.load('./assets/scene.gltf',function(gltf){
    console.log(gltf)
    const root = gltf.scene;
    root.scale.set(5,5,5);
    scene.add(root);
} );

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(5,1,1)
scene.add(light);

const backlight = new THREE.DirectionalLight(0xffffff,2);
backlight.position.set(-5,-1,-1);
scene.add(backlight)

const sizes = {
    width: window.innerWidth/3,
    height: window.innerHeight/1.3,

}

const camera = new THREE.PerspectiveCamera(45,sizes.width / sizes.height,0.1,100);
camera.position.x = 20;
scene.add(camera);

const canvas = document.querySelector(".model");
const renderer = new THREE.WebGL1Renderer( {canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene,camera);


const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false


window.addEventListener("resize", () => {
    sizes.width = window.innerWidth/3
    sizes.height = window.innerHeight/1.3
    camera.aspect = sizes.width/sizes.height
    renderer.setSize(sizes.width,sizes.height)
});
const loop = () => {
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)
}
loop()
    
