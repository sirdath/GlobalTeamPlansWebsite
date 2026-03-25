import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Preload } from '@react-three/drei';
import * as THREE from 'three';

const GlobeModel: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const segments = isMobile ? 32 : 64;

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

      const targetX = scrollRef.current * 0.0006;
      const targetZ = scrollRef.current * 0.0002;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.8}>
        <sphereGeometry args={[1, segments, segments]} />
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (typeof window === 'undefined') return <div className={className}></div>;

  return (
    <div className={`w-full h-full pointer-events-none ${className}`}>
      <Canvas
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#2dd4bf" />
          <GlobeModel isMobile={isMobile} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeScene;
