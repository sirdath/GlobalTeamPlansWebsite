import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Cone, Box, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface ServiceIcon3DProps {
  type: 'crisis' | 'counselling' | 'digital' | 'worklife' | 'community' | 'analytics';
}

const ServiceIcon3D: React.FC<ServiceIcon3DProps> = ({ type }) => {
  if (typeof window === 'undefined') return null;

  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'crisis': return <Icosahedron args={[1, 0]} />;
      case 'counselling': return <Torus args={[0.7, 0.3, 16, 100]} />;
      case 'digital': return <Box args={[1, 1, 1]} />;
      case 'worklife': return <Octahedron args={[1, 0]} />;
      case 'community': return <Cone args={[0.8, 1.4, 32]} />;
      case 'analytics': return <Box args={[0.2, 1.5, 0.2]} />; // Placeholder for a bar-chart style
      default: return <Icosahedron args={[1, 0]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        {getGeometry()}
        <MeshDistortMaterial
          color="#2dd4bf"
          speed={3}
          distort={0.3}
          radius={1}
          emissive="#0d9488"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export default ServiceIcon3D;
