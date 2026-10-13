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

    // Check if user prefers reduced motion or is on mobile/touch screen (< 768px)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileScreen = window.innerWidth < 768;
    if (prefersReducedMotion || isMobileScreen) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Architectural geometric wireframe form (minimal technical accent)
    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(4, 1);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x245bdb,
      transparent: true,
      opacity: 0.12,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, lineMat);
    group.add(wireMesh);

    // Initial position
    group.position.set(6, 0, -2);

    let animationFrameId: number;
    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      // Gentle, slow rotation
      wireMesh.rotation.y += 0.0015;
      wireMesh.rotation.x += 0.0008;

      // Subtle parallax response to scroll
      group.position.y = -scrollY * 0.004;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      wireGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50"
      style={{ willChange: "transform" }}
    />
  );
}
