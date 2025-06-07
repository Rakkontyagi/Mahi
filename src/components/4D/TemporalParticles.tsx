import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { use4DContext } from '../../hooks/use4DContext';

interface ParticleSystemProps {
  count?: number;
  interactionHistory?: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ count = 300, interactionHistory = false }) => {
  const meshRef = useRef<THREE.Points>(null);
  const { userMemory, timeContext } = use4DContext();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      const intensity = interactionHistory && userMemory.interactions.length > 0 
        ? Math.random() * 0.4 + 0.3 
        : Math.random() * 0.2 + 0.1;

      colors[i3] = intensity;
      colors[i3 + 1] = intensity;
      colors[i3 + 2] = intensity;
    }

    return { positions, colors };
  }, [count, userMemory.interactions.length, interactionHistory]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.01;

      const timeMultiplier = timeContext.timeOfDay === 'night' ? 0.5 : 1;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.05 * timeMultiplier);
    }
  });

  return (
    <Points ref={meshRef} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        opacity={0.4}
        size={0.03}
        sizeAttenuation={true}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export const TemporalParticles: React.FC<ParticleSystemProps> = (props) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleSystem {...props} />
      </Canvas>
    </div>
  );
};