import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { use4DContext } from '../../hooks/use4DContext';

interface MoneyParticleSystemProps {
  count?: number;
}

const MoneyParticleSystem: React.FC<MoneyParticleSystemProps> = ({ count = 200 }) => {
  const meshRef = useRef<THREE.Points>(null);
  const { userMemory, timeContext } = use4DContext();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create money-themed particle distribution
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      // Golden money colors
      const intensity = Math.random() * 0.3 + 0.4;
      colors[i3] = 1.0; // Red
      colors[i3 + 1] = 0.8 + Math.random() * 0.2; // Green (golden)
      colors[i3 + 2] = 0.2; // Blue

      sizes[i] = Math.random() * 0.05 + 0.02;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={meshRef} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        opacity={0.6}
        size={0.03}
        sizeAttenuation={true}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const GeometricMoneyShapes: React.FC = () => {
  return (
    <>
      {/* Golden Spheres representing coins */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Float
          key={`sphere-${index}`}
          speed={0.5 + Math.random() * 0.5}
          rotationIntensity={0.3}
          floatIntensity={0.3}
          position={[
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 10
          ]}
        >
          <Sphere args={[0.3, 16, 16]}>
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.8}
              roughness={0.2}
              emissive="#FFD700"
              emissiveIntensity={0.1}
            />
          </Sphere>
        </Float>
      ))}

      {/* Rectangular money bills */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Float
          key={`box-${index}`}
          speed={0.3 + Math.random() * 0.4}
          rotationIntensity={0.4}
          floatIntensity={0.4}
          position={[
            (Math.random() - 0.5) * 16,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8
          ]}
        >
          <Box args={[1.5, 0.8, 0.05]}>
            <meshStandardMaterial
              color="#228B22"
              metalness={0.3}
              roughness={0.7}
              emissive="#228B22"
              emissiveIntensity={0.05}
            />
          </Box>
        </Float>
      ))}

      {/* Torus shapes representing investment rings */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Float
          key={`torus-${index}`}
          speed={0.4 + Math.random() * 0.3}
          rotationIntensity={0.6}
          floatIntensity={0.2}
          position={[
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6
          ]}
        >
          <Torus args={[0.8, 0.2, 8, 16]}>
            <meshStandardMaterial
              color="#C0C0C0"
              metalness={0.9}
              roughness={0.1}
              emissive="#C0C0C0"
              emissiveIntensity={0.1}
            />
          </Torus>
        </Float>
      ))}
    </>
  );
};

const MoneyScene: React.FC = () => {
  return (
    <>
      {/* Ambient lighting for golden glow */}
      <ambientLight intensity={0.3} color="#FFD700" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#FFD700" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FFFFFF" />
      
      {/* Money particle system */}
      <MoneyParticleSystem count={150} />
      
      {/* Geometric money shapes */}
      <GeometricMoneyShapes />
    </>
  );
};

export const MoneyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <MoneyScene />
      </Canvas>
    </div>
  );
};