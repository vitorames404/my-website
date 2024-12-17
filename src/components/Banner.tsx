import React, { useEffect, useRef } from 'react';

import Model from '../model/scene.gltf';

// Import three.js
import * as THREE from 'three';

// Import OrbitControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Import GLTFLoader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Banner: React.FC = () => {

    const bannerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {

        if(!bannerRef.current) return;

        // Create a scene
        const scene = new THREE.Scene;

        // Create the camera that will be used
        const camera = new THREE.PerspectiveCamera(70, bannerRef.current.clientWidth / bannerRef.current.clientHeight, 0.1, 1000);

        camera.position.z = 0.7;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(bannerRef.current.clientWidth, bannerRef.current.clientHeight);
        bannerRef.current.appendChild(renderer.domElement);

        // Add light
        const topLight = new THREE.DirectionalLight(0xffffff, 1);
        topLight.position.set(500, 500, 500);
        topLight.castShadow = true;
        scene.add(topLight);
        

        const ambientLight = new THREE.AmbientLight(0x333333, 1);
        scene.add(ambientLight);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Loader 
        const loader = new GLTFLoader();
        let object: THREE.Object3D | undefined;

        loader.load(
            Model,
            (gltf) => {
                if (!object) { // Only add the object if it hasn't been added yet
                    object = gltf.scene;
        
                    // Center and scale the object
                    const box = new THREE.Box3().setFromObject(object);
                    const center = box.getCenter(new THREE.Vector3());
        
                    // Center the object
                    object.position.set(center.x, -center.y, center.z);
                    
                    object.scale.set(0.4, 0.4, 0.4); 

                    object.rotation.z = 0;
                    object.rotation.y = Math.PI * 2;

                    scene.add(object);
                }
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error('An error occurred:', error);
            }
        );
        

        // Raycaster and mouse vector
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // State for dragging
        let isDragging = false;

        // Mouse events
        const onMouseMove = (event: MouseEvent) => {
            // Update mouse position
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // If dragging, rotate the model
            if (isDragging && object) {
                object.rotation.y += mouse.x * 0.05;
                object.rotation.x += mouse.y * 0.05;

                 // Log the current rotation angles in radians
                console.log(
                    `Rotation angles (in radians): x=${object.rotation.x}, y=${object.rotation.y}, z=${object.rotation.z}`
                );

                // Log in degrees for easier readability
                console.log(
                    `Rotation angles (in degrees): x=${THREE.MathUtils.radToDeg(object.rotation.x)}, y=${THREE.MathUtils.radToDeg(object.rotation.y)}, z=${THREE.MathUtils.radToDeg(object.rotation.z)}`
                );
            }
        };

        const onMouseDown = (event: MouseEvent) => {
            // Update the raycaster based on mouse position
            raycaster.setFromCamera(mouse, camera);

            // Check if the ray intersects with the model
            const intersects = raycaster.intersectObject(object || new THREE.Object3D());
            if (intersects.length > 0) {
                isDragging = true; // Start dragging if the model is clicked
            }
        };

        const onMouseUp = () => {
            isDragging = false; // Stop dragging when the mouse is released
        };

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
        
            // If the object is not being dragged rotate it by default
            if(!isDragging && object){
                object.rotation.y += 0.002;
            }

            controls.update(); // Keep OrbitControls updated
            renderer.render(scene, camera); // Render the scene
        };
        
        // Add event listeners to the canvas
        renderer.domElement.addEventListener('mousemove', onMouseMove);
        renderer.domElement.addEventListener('mousedown', onMouseDown);
        renderer.domElement.addEventListener('mouseup', onMouseUp);

        animate();

        // Resize handling
        const onWindowResize = () => {
            if (bannerRef.current) {
                camera.aspect = bannerRef.current.clientWidth / bannerRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(bannerRef.current.clientWidth, bannerRef.current.clientHeight);
            }
        };
        window.addEventListener('resize', onWindowResize);


        // Cleanup function to prevent duplicates
        return () => {
            while (scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }
            renderer.dispose();
            window.removeEventListener('resize', onWindowResize);
            if (bannerRef.current) {
                bannerRef.current.innerHTML = ''; // Remove the canvas
            }
        };

     }, []);

    return (
        <div className="w-screen min-h-10 p-5 my-[35px]">
            {/* Wrapper to centralize and set max width */}
            <div className="max-w-lg mx-auto h-60" id="banner" ref={bannerRef}></div>
        </div>
    );
};

export default Banner;
