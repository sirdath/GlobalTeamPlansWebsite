import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Globe: React.FC = () => {
  if (typeof window === 'undefined') return null;

  const globeRef = useRef<THREE.Group>(null);
  
  // Create stylized point cloud for the globe
  const circlePoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 3000; i++) {
        const phi = Math.acos(-1 + (2 * i) / 3000);
        const theta = Math.sqrt(3000 * Math.PI) * phi;
        
        const x = Math.cos(theta) * Math.sin(phi);
        const y = Math.sin(theta) * Math.sin(phi);
        const z = Math.cos(phi);
        
        points.push(new THREE.Vector3(x * 2, y * 2, z * 2));
    }
    return points;
  }, []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={globeRef}>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.5} 
        autoRotate={false}
      />
      
      {/* Main Stylized Sphere */}
      <mesh scale={1.9}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#0d9488" 
          transparent 
          opacity={0.15} 
          wireframe={false}
          emissive="#0d9488"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Point Cloud for Landmasses/Styling */}
      <Points positions={new Float32Array(circlePoints.flatMap(p => [p.x, p.y, p.z]))}>
        <PointMaterial 
          transparent 
          color="#2dd4bf" 
          size={0.035} 
          sizeAttenuation={true} 
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Atmospheric Glow */}
      <Sphere args={[2.2, 32, 32]}>
        <meshBasicMaterial 
          color="#0d9488" 
          transparent 
          opacity={0.05} 
          side={THREE.BackSide} 
        />
      </Sphere>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#2dd4bf" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
    </group>
  );
};

export default Globe;
