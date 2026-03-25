import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Preload } from '@react-three/drei';
import * as THREE from 'three';

const GlobeModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);

  // Listen to scroll events to update target rotations smoothly without triggering React re-renders or lag
  React.useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04; 
      
      // Reactive tilt based on scroll position
      const targetX = scrollRef.current * 0.0006;
      const targetZ = scrollRef.current * 0.0002;
      
      // Smoothly interpolate current rotation to the target scroll rotation
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.8}> 
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#0d9488" 
          transparent 
          opacity={0.15} 
          emissive="#2dd4bf"
          emissiveIntensity={0.2}
          wireframe={true} 
        />
      </mesh>
    </group>
  );
};

const GlobeScene: React.FC<{ className?: string }> = ({ className }) => {
  if (typeof window === 'undefined') return <div className={className}></div>;

  return (
    <div className={`w-full h-full pointer-events-none ${className}`}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#2dd4bf" />
          <GlobeModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeScene;
