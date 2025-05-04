"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
    );
    camera.position.z = 80; // Move camera further back to capture wider scene

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(20, 40, 20);
    scene.add(ambientLight, directionalLight);

    // Raycaster + Mouse
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Geometry & Cubes
    const geometry = new THREE.BoxGeometry();
    const cubeGroup = new THREE.Group();
    const cubes = [];

    const spread = window.innerWidth > 768 ? 120 : 80; // Wider for large screens

    for (let i = 0; i < 100; i++) {
      const isViolet = i % 2 === 0;
      const color = new THREE.Color(isViolet ? '#8a2be2' : '#000000');

      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 100,
        specular: 0x888888,
      });

      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      const scale = 0.8 + Math.random() * 1.5;
      cube.scale.set(scale, scale, scale);

      cube.userData.originalColor = color;
      cubes.push(cube);
      cubeGroup.add(cube);
    }

    scene.add(cubeGroup);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cubeGroup.rotation.y += 0.0015;
      cubeGroup.rotation.x += 0.001;

      // Update raycaster with mouse
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);

      cubes.forEach((cube) => {
        const mat = cube.material;
        if (intersects.find(hit => hit.object === cube)) {
          mat.color.set('#ffffff'); // On hover → white
          mat.shininess = 200;
        } else {
          mat.color.copy(cube.userData.originalColor); // Restore
          mat.shininess = 100;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#000000',
      }}
    />
  );
};

export default ThreeBackground;