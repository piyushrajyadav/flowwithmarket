"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Book() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <boxGeometry args={[3, 4, 0.5]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function ThreeDBook() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Book />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
