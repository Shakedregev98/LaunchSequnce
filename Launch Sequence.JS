import * as THREE from './node_modules/three';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import {FBXLoader} from './node_modules/three/examples/jsm/loaders/FBXLoader.js'
import {TransformControls} from './node_modules/three/examples/jsm/controls/TransformControls.js'
import {Water} from './node_modules/three/examples/jsm/objects/Water.js'
import studio from './node_modules/@theatre/studio'
import {getProject} from './node_modules/@theatre/core'
import {types} from './node_modules/@theatre/core/dist/index'



let scene, camera, renderer, water, Rocket, Orbit, KMValue, controls;
let light1, light2, light3, light4, light5, light6, light7, light8, light9, light10, light11, light12, light13, light14, light15, light16, light17, light18;
let light19, light20, light21, light22, light23, light24, light25, light26, light27, light28, light29,light30, Dirlight;

const gui = new dat.GUI();
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 5000);
    const canvas = document.querySelector(".Three")
    renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio)

    camera.position.set(-6.003, 0.396, -1.218)
    
    const waterGeometry = new THREE.PlaneGeometry( 512, 512 );
    water = new Water(
        waterGeometry,
        {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load( 'photos/textures/waternormals.jpg', function ( texture ) {

                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

            } ),
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
        }
    );
    
    water.position.set(258,-0.01,0)
    water.rotation.x = - Math.PI / 2;

    scene.add( water );

    const LaunchComplexloader = new FBXLoader();
	LaunchComplexloader.load( './Models/FBX/LaunchComplex.fbx', function ( object ) {
		object.traverse( function ( child ) {

			if ( child.isMesh ) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		} );

		scene.add( object );
	} );
    
    const Rocketloader = new FBXLoader();
	Rocketloader.load( './Models/FBX/Rocket.fbx', function ( object ) {
		object.traverse( function ( child ) {

			if ( child.isMesh ) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		} );

        Rocket = object
		scene.add( object );

        
	} );

  light1 = new THREE.PointLight(0xffffff, 0.1);
    light1.position.set(-0.236,0.555,-0.483);
    scene.add(light1)
    
    light2 = new THREE.PointLight(0xffffff, 0.1);
    light2.position.set(-0.241,0.56,-0.42);
    scene.add(light2)
    
    light3 = new THREE.PointLight(0xffffff, 0.1);
    light3.position.set(-0.68,0.56,4.995);
    scene.add(light3)
    
    light4 = new THREE.PointLight(0xffffff, 0.1);
    light4.position.set(-0.68,0.56,4.928);
    scene.add(light4)
    
    light5 = new THREE.PointLight(0xffffff, 0.1);
    light5.position.set(-0.575,0.56,3.317);
    scene.add(light5)
    
    light6 = new THREE.PointLight(0xffffff, 0.1);
    light6.position.set(-0.57,0.56,3.38);
    scene.add(light6)
    
    light7 = new THREE.PointLight(0xffffff, 0.1);
    light7.position.set(-0.228,0.569,-1.915);
    scene.add(light7)
    
    light8 = new THREE.PointLight(0xffffff, 0.1);
    light8.position.set(-0.23,0.569,-1.976);
    scene.add(light8)

    light9 = new THREE.PointLight(0xffffff, 0.1);
    light9.position.set(-0.18,0.578,-3.4);
    scene.add(light9)
    
    light10 = new THREE.PointLight(0xffffff, 0.1);
    light10.position.set(-0.18,0.578,-3.47);
    scene.add(light10)
    
    light11 = new THREE.PointLight(0xffffff, 0.1);
    light11.position.set(1.693,0.557,-4.03);
    scene.add(light11)
    
    light12 = new THREE.PointLight(0xffffff, 0.1);
    light12.position.set(1.636,0.56,-4.065);
    scene.add(light12)
    
    light13 = new THREE.PointLight(0xffffff, 0.1);
    light13.position.set(3.426,0.56,-2.546);
    scene.add(light13)
    
    light14 = new THREE.PointLight(0xffffff, 0.1);
    light14.position.set(3.467,0.56,-2.498);
    scene.add(light14)
    
    light15 = new THREE.PointLight(0xffffff, 0.1);
    light15.position.set(4.401,0.56,-0.375);
    scene.add(light15)
    
    light16 = new THREE.PointLight(0xffffff, 0.1);
    light16.position.set(4.418,0.56,-0.312);
    scene.add(light16)
    
    light17 = new THREE.PointLight(0xffffff, 0.1);
    light17.position.set(4.405,0.56,2.022);
    scene.add(light17)
    
    light18 = new THREE.PointLight(0xffffff, 0.1);
    light18.position.set(4.404,0.56,2.088);
    scene.add(light18)
    
    light19 = new THREE.PointLight(0xffffff, 0.1);
    light19.position.set(3.473,0.56,4.231);
    scene.add(light19)
    
    light20 = new THREE.PointLight(0xffffff, 0.1);
    light20.position.set(3.436,0.56,4.283);
    scene.add(light20)
    
    light21 = new THREE.PointLight(0xffffff, 0.1);
    light21.position.set(1.745,0.56,5.891);
    scene.add(light21)
    
    light22 = new THREE.PointLight(0xffffff, 0.1);
    light22.position.set(1.691,0.56,5.928);
    scene.add(light22)
    
    light23 = new THREE.PointLight(0xffffff, 0.1);
    light23.position.set(-3.782,0.56,5.705);
    scene.add(light23)
    
    light24 = new THREE.PointLight(0xffffff, 0.1);
    light24.position.set(-3.843,0.56,5.685);
    scene.add(light24)
    
    light25 = new THREE.PointLight(0xffffff, 0.1);
    light25.position.set(-6.145,0.56,2.51);
    scene.add(light25)
    
    light26 = new THREE.PointLight(0xffffff, 0.1);
    light26.position.set(-6.181,0.56,2.457);
    scene.add(light26)
    
    light27 = new THREE.PointLight(0xffffff, 0.1);
    light27.position.set(-6.005,0.56,-1.463);
    scene.add(light27)
    
    light28 = new THREE.PointLight(0xffffff, 0.1);
    light28.position.set(-5.998,0.56,-1.527);
    scene.add(light28)
    
    light29 = new THREE.PointLight(0xffffff, 0.1);
    light29.position.set(-3.517,0.56,-4.136);
    scene.add(light29)
    
    light30 = new THREE.PointLight(0xffffff, 0.1);
    light30.position.set(-3.468,0.56,-4.181);
    scene.add(light30)

    Dirlight = new THREE.DirectionalLight(0xffffff, 0.02);
    Dirlight.position.set(-3,2,1);
    scene.add(Dirlight)

const skydomeGeometry = new THREE.SphereGeometry(5000, 60, 40);

    const skydomeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.BackSide
    });

    const skydome = new THREE.Mesh(skydomeGeometry, skydomeMaterial);

    scene.add(skydome);

    const starGeometry = new THREE.BufferGeometry ()
    const starMaterial = new THREE.PointsMaterial({color: 0xffffff})

    const starVertices = []
    for (let i = 0; i < 1000; i++) {
        const phi = Math.acos(-1 + (2 * i) / 1000);
        const theta = Math.sqrt(1000 * Math.PI) * phi;
      
        const x = 5000 * Math.sin(phi) * Math.cos(theta);
        const y = 5000 * Math.sin(phi) * Math.sin(theta);
        const z = 5000 * Math.cos(phi);
        
        const noise = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
          ).normalize()
        
        const noiseScale = 100
        
        const noiseX = noise.x * noiseScale
        const noiseY = noise.y * noiseScale
        const noiseZ = noise.z * noiseScale
        
        starVertices.push(x + noiseX, y + noiseY, z + noiseZ)
    }
    
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

    const stars = new THREE.Points(starGeometry,starMaterial)

    
    
    scene.add(stars)

    /*const cubeGeo = new THREE.BoxGeometry (0.1,0.1,0.1)
    const cubeMesh = new THREE.MeshBasicMaterial ({color: 0x100100})

    cube = new THREE.Mesh (cubeGeo,cubeMesh);

    cube.position.set(-5.851, 0.704, -1.317)

    scene.add(cube)

    const tcontrol = new TransformControls(camera, renderer.domElement)

    tcontrol.attach(cube)
    scene.add(tcontrol)

    tcontrol.setMode('translate')

    tcontrol.addEventListener('dragging-changed', (e)=>{
        Orbit.enabled = !e.value
    })*/

    
    

    const gridhelper = new THREE.GridHelper(10,10)
    scene.add(gridhelper)
    Orbit =  new OrbitControls(camera, renderer.domElement)

    controls = new TransformControls(camera, renderer.domElement)
    controls.addEventListener('dragging-changed', (e)=>{
        Orbit.enabled = !e.value
    })
    //controls.attach(RocketCamera);
    //scene.add(controls);
    //controls.setMode('translate');

    //camera.position.z = 5;

}

function setKMValue() {
    KMValue = document.querySelector("#value")
    const newValue = Math.floor(Rocket.position.y * 10); 
    KMValue.textContent = `${newValue} KM`;
    console.log (KMValue)
}

const onKeyDown = (event) => {
    switch (event.keyCode) {
      case 32: // spcace
        const speed = 1
        Rocket.position.y += Math.pow(speed, Rocket.position.y);
        Rocket.rotation.z += 0.005;
        camera.position.y += Math.pow(speed, camera.position.y);
        console.log(Rocket.position.y)
        playNextPage();
        setKMValue();
        break;
    }
};

function playNextPage () {
    if (Rocket.position.y >=200) {
        window.location.href = "outer space.html";
    } 
    
}
  
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //Orbit.update()
}

document.addEventListener('keydown', onKeyDown);

function OnWindowReSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', OnWindowReSize, false);   

init();
animate();

studio.initialize()
const project = getProject('THREE.js x Theatre.js')
const sheet = project.sheet('animated scene')
const CameraOBJ = sheet.object ('camera', {
    position: types.compound({
        x: types.number(camera.position.x),
        y: types.number(camera.position.y),
        z: types.number(camera.position.z),
    }),
})
CameraOBJ.onValuesChange((values) => {
    const {x,y,z} = values.position

    camera.position.set(x,y,z)
})