"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeCanvasProps {
  currentSection?: number;
}

export default function ThreeCanvas({ currentSection = 0 }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(currentSection);

  useEffect(() => {
    sectionRef.current = currentSection;
  }, [currentSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080d, 0.025);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 1. Central Core: The Data Constellation Matrix
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1a. Outer Geometric Constellation (Icosahedron Framework)
    const outerConstellationGroup = new THREE.Group();
    coreGroup.add(outerConstellationGroup);

    const outerIcoGeo = new THREE.IcosahedronGeometry(5.2, 0);
    const outerEdgesGeo = new THREE.EdgesGeometry(outerIcoGeo);
    const outerLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const outerWireLines = new THREE.LineSegments(outerEdgesGeo, outerLineMat);
    outerConstellationGroup.add(outerWireLines);

    // Subtle holographic translucent facet shading
    const outerFacetsMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const outerFacetsMesh = new THREE.Mesh(outerIcoGeo, outerFacetsMat);
    outerConstellationGroup.add(outerFacetsMesh);

    // Pulsing vertex nodes (glowing data spheres at each vertex)
    const nodeGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x06b6d4,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.9,
    });

    const posAttr = outerIcoGeo.attributes.position;
    const uniqueVertices: THREE.Vector3[] = [];
    for (let i = 0; i < posAttr.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(posAttr, i);
      if (!uniqueVertices.some((u) => u.distanceTo(v) < 0.01)) {
        uniqueVertices.push(v);
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.copy(v);
        outerConstellationGroup.add(nodeMesh);
      }
    }

    // 1b. Inner Counter-Rotating Dual Core (Octahedron & Quantum Crystal)
    const innerConstellationGroup = new THREE.Group();
    coreGroup.add(innerConstellationGroup);

    const innerGeo = new THREE.OctahedronGeometry(2.6, 0);
    const innerEdgesGeo = new THREE.EdgesGeometry(innerGeo);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.75,
    });
    const innerWireLines = new THREE.LineSegments(innerEdgesGeo, innerLineMat);
    innerConstellationGroup.add(innerWireLines);

    // Central glowing quantum power crystal
    const innerCoreGeo = new THREE.DodecahedronGeometry(1.4, 0);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.85,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    innerConstellationGroup.add(innerCoreMesh);

    // Inner vertex nodes
    const innerPosAttr = innerGeo.attributes.position;
    const innerUniqueVertices: THREE.Vector3[] = [];
    for (let i = 0; i < innerPosAttr.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(innerPosAttr, i);
      if (!innerUniqueVertices.some((u) => u.distanceTo(v) < 0.01)) {
        innerUniqueVertices.push(v);
        const innerNode = new THREE.Mesh(nodeGeo, nodeMat);
        innerNode.position.copy(v);
        innerNode.scale.setScalar(0.7);
        innerConstellationGroup.add(innerNode);
      }
    }

    // 1c. Orbiting Micro Data Cubes (Cloud Data Tokens)
    const cubeGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.9,
    });
    const orbitingCubes: {
      mesh: THREE.Mesh;
      radius: number;
      speed: number;
      offset: number;
      tiltAngle: number;
    }[] = [];

    for (let i = 0; i < 14; i++) {
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      const radius = 6.2 + (i % 4) * 0.7;
      const speed = 0.35 + (i % 3) * 0.12;
      const offset = (i / 14) * Math.PI * 2;
      const tiltAngle = (i % 2 === 0 ? 1 : -1) * (0.3 + (i % 5) * 0.12);
      orbitingCubes.push({ mesh, radius, speed, offset, tiltAngle });
      coreGroup.add(mesh);
    }

    // 1d. Concentric Orbiting Cyber Rings
    const ring1Geo = new THREE.RingGeometry(8.2, 8.28, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(9.8, 9.88, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // 2. Starfield / Floating Quantum Particles
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x3b82f6);
    const colorCyan = new THREE.Color(0x06b6d4);
    const colorWhite = new THREE.Color(0xe2e8f0);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;

      // Color variation
      const rand = Math.random();
      const c = rand > 0.6 ? colorCyan : rand > 0.25 ? colorBlue : colorWhite;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Create round glowing dot texture via canvas
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(56,189,248,0.8)");
      gradient.addColorStop(0.7, "rgba(37,99,235,0.2)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.75,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 50);
    pointLight1.position.set(12, 10, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x818cf8, 2.5, 50);
    pointLight2.position.set(-15, -10, 10);
    scene.add(pointLight2);

    // Mouse Interaction Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll Tracking
    let scrollProgress = 0;
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = window.scrollY / maxScroll;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Section-based target positioning for Core Group
      // Section 0 (Hero): Center
      // Section 1 (Who we are): Offset right
      // Section 2 (What we do): Offset left, slightly scaled
      // Section 3 (What we made): Center-back, expanded
      // Section 4 (How we work): Orbit tilt
      // Section 5 (What's new): Pulsing spin
      // Section 6 (Get in touch): Low background glow
      const curSec = sectionRef.current;
      const isMobile = window.innerWidth < 768;
      const xFactor = isMobile ? 0.25 : 1;

      let targetCoreX = 0;
      let targetCoreY = 0;
      let targetCoreZ = 0;
      let targetScale = isMobile ? 0.75 : 1;

      if (curSec === 0) {
        // Hero
        targetCoreX = 5.5 * xFactor;
        targetCoreY = isMobile ? 3 : 0;
        targetCoreZ = 0;
        targetScale = isMobile ? 0.75 : 1.05;
      } else if (curSec === 1) {
        // Who We Are
        targetCoreX = -7 * xFactor;
        targetCoreY = 1;
        targetCoreZ = -2;
        targetScale = isMobile ? 0.7 : 0.9;
      } else if (curSec === 2) {
        // What We Do
        targetCoreX = 7.5 * xFactor;
        targetCoreY = -1;
        targetCoreZ = -3;
        targetScale = isMobile ? 0.65 : 0.85;
      } else if (curSec === 3) {
        // What We Made
        targetCoreX = 0;
        targetCoreY = 2;
        targetCoreZ = -4;
        targetScale = isMobile ? 0.8 : 1.1;
      } else if (curSec === 4) {
        // How We Work
        targetCoreX = -6 * xFactor;
        targetCoreY = -1;
        targetCoreZ = -2;
        targetScale = isMobile ? 0.7 : 0.95;
      } else if (curSec === 5) {
        // What's New
        targetCoreX = 6.5 * xFactor;
        targetCoreY = 0;
        targetCoreZ = -3;
        targetScale = isMobile ? 0.65 : 0.85;
      } else {
        // Get In Touch
        targetCoreX = 0;
        targetCoreY = -3;
        targetCoreZ = -1;
        targetScale = isMobile ? 0.75 : 1;
      }

      // Smooth interpolation for core group
      coreGroup.position.x += (targetCoreX - coreGroup.position.x) * 0.04;
      coreGroup.position.y += (targetCoreY - coreGroup.position.y) * 0.04;
      coreGroup.position.z += (targetCoreZ - coreGroup.position.z) * 0.04;

      const currentScale = coreGroup.scale.x;
      const newScale = currentScale + (targetScale - currentScale) * 0.04;
      coreGroup.scale.set(newScale, newScale, newScale);

      // Core constellation rotation with mouse influence
      coreGroup.rotation.y = elapsedTime * 0.18 + mouse.x * 0.5;
      coreGroup.rotation.x = elapsedTime * 0.1 + mouse.y * 0.35;

      // Outer constellation gentle secondary spin
      outerConstellationGroup.rotation.y = elapsedTime * 0.08;
      outerConstellationGroup.rotation.z = -elapsedTime * 0.05;

      // Inner dual core counter-rotation
      innerConstellationGroup.rotation.y = -elapsedTime * 0.35;
      innerConstellationGroup.rotation.z = elapsedTime * 0.25;

      // Inner core breathing pulsation
      const corePulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      innerCoreMesh.scale.set(corePulse, corePulse, corePulse);

      // Node dynamic emissive pulse
      nodeMat.emissiveIntensity = 1.0 + Math.sin(elapsedTime * 3) * 0.4;
      innerCoreMat.emissiveIntensity = 0.7 + Math.cos(elapsedTime * 2.2) * 0.3;

      // Orbiting micro-cubes update
      orbitingCubes.forEach((cube) => {
        const angle = elapsedTime * cube.speed + cube.offset;
        cube.mesh.position.x = Math.cos(angle) * cube.radius;
        cube.mesh.position.y = Math.sin(angle) * Math.sin(cube.tiltAngle) * cube.radius * 0.5;
        cube.mesh.position.z = Math.sin(angle) * Math.cos(cube.tiltAngle) * cube.radius;
        cube.mesh.rotation.x += 0.02;
        cube.mesh.rotation.y += 0.03;
      });

      // Outer rings orbit
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.18;

      // Starfield / Particles continuous drift & scroll parallax
      particles.rotation.y = elapsedTime * 0.03 + mouse.x * 0.15;
      particles.rotation.x = mouse.y * 0.12 - scrollProgress * 0.8;

      // Camera gentle floating breathing motion
      camera.position.x = mouse.x * 2.2;
      camera.position.y = mouse.y * 1.8;
      camera.lookAt(0, 0, 0);

      // Dynamic light movement
      pointLight1.position.x = Math.sin(elapsedTime * 0.6) * 15;
      pointLight1.position.y = Math.cos(elapsedTime * 0.4) * 12;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      outerIcoGeo.dispose();
      outerEdgesGeo.dispose();
      outerLineMat.dispose();
      outerFacetsMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      innerGeo.dispose();
      innerEdgesGeo.dispose();
      innerLineMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-95 transition-opacity duration-1000"
      style={{ willChange: "transform" }}
    />
  );
}
