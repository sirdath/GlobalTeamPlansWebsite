import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Cone, Box, Torus, Octahedron, Icosahedron, Preload } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  type: 'crisis' | 'counselling' | 'digital' | 'worklife' | 'community' | 'analytics';
}

const IconModel: React.FC<Props> = ({ type }) => {
  const getGeometry = () => {
    switch (type) {
      case 'crisis': return <icosahedronGeometry args={[1, 0]} />;
      case 'counselling': return <torusGeometry args={[0.7, 0.3, 16, 100]} />;
      case 'digital': return <boxGeometry args={[1, 1, 1]} />;
      case 'worklife': return <octahedronGeometry args={[1, 0]} />;
      case 'community': return <coneGeometry args={[0.8, 1.4, 32]} />;
      case 'analytics': return <boxGeometry args={[0.3, 1.5, 0.3]} />;
      default: return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        {getGeometry()}
        <meshPhysicalMaterial
          color="#2dd4bf"
          transmission={0.7}
          thickness={1.5}
          roughness={0.05}
          metalness={0.1}
          ior={1.45}
          attenuationColor="#ffffff"
          attenuationDistance={1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const ServiceIconScene: React.FC<Props> = ({ type }) => {
  if (typeof window === 'undefined') return <div className="w-full h-full"></div>;

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 1.5]} // Lower DPR for icon grid performance
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }} // Use low-power for many icons
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#2dd4bf" />
          <IconModel type={type} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ServiceIconScene;
