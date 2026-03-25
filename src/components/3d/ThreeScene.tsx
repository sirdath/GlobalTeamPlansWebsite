import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, AdaptiveEvents, AdaptiveDpr } from '@react-three/drei';

interface ThreeSceneProps {
  children: React.ReactNode;
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ children, className }) => {
  if (typeof window === 'undefined') return <div className={className}></div>;

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
