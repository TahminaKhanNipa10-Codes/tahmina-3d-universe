import { useState, useEffect, useRef } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';
import { soundEngine } from '../utils/sound';

interface AdvancedCometProps {
  onBlast: (pos: [number, number, number]) => void;
}

export default function AdvancedComet({ onBlast: triggerFullBlast }: AdvancedCometProps) {
  const cometGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    
    // Smooth orbit tracking
    if (cometGroupRef.current) {
      // Moves diagonally across the screen
      const pathX = Math.sin(elapsed * 0.35) * 5 + 1;
      const pathY = Math.cos(elapsed * 0.35) * 2 + 1;
      const pathZ = -3 + Math.sin(elapsed * 0.2) * 1.5;
      
      cometGroupRef.current.position.set(pathX, pathY, pathZ);
    }
    
    // Fast rotate core
    if (coreRef.current) {
      coreRef.current.rotation.x = elapsed * 1.5;
      coreRef.current.rotation.y = elapsed * 2.2;
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!cometGroupRef.current) return;
    
    // Play explosion sound effect
    soundEngine.playBigBangExplosion();
    
    // Get world position of the comet
    const targetPos: [number, number, number] = [
      cometGroupRef.current.position.x,
      cometGroupRef.current.position.y,
      cometGroupRef.current.position.z
    ];

    triggerFullBlast(targetPos);
  };

  return (
    <group 
      ref={cometGroupRef} 
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* 3D IRREGULAR COMET ROCK - HIGH END */}
      <mesh ref={coreRef} castShadow>
        <dodecahedronGeometry args={[0.13, 1]} />
        <meshPhysicalMaterial 
          color={hovered ? "#00ffcc" : "#475569"} 
          emissive={hovered ? "#00ffcc" : "#0f172a"}
          emissiveIntensity={hovered ? 3.0 : 0.8}
          roughness={0.8}
          metalness={0.9}
        />
      </mesh>

      {/* GLOW SHELLS */}
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={hovered ? 0.45 : 0.22} />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[0.38, 16, 16]} />
        <meshBasicMaterial color="#ff0055" transparent opacity={hovered ? 0.25 : 0.1} />
      </mesh>

      {/* CINEMATIC SPARKLE CLOUD */}
      <Sparkles count={35} scale={1.0} size={1.8} color="#00ffcc" speed={1.5} />

      {/* BEACON LABEL */}
      <Html distanceFactor={6} position={[0, -0.4, 0]} center pointerEvents="none">
        <div className={`font-mono text-[7px] tracking-widest uppercase transition-all duration-300 ${hovered ? 'text-red-400 scale-110' : 'text-slate-400'}`}>
          [ CLICK COMET CORE FOR BIG-BANG ]
        </div>
      </Html>
    </group>
  );
}
