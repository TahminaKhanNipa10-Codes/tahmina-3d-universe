import { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { ProjectData } from '../constants/projects';
import { soundEngine } from '../utils/sound';

interface PlanetProps {
  planet: ProjectData;
  isSelected: boolean;
  onSelect: (planet: ProjectData) => void;
  index: number;
}

export default function Planet({ planet, isSelected, onSelect, index }: PlanetProps) {
  const [hovered, setHovered] = useState(false);
  const planetMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Material update optimization using useFrame
  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    
    // Rotate Planet
    if (planetMeshRef.current && !isSelected) {
      planetMeshRef.current.rotation.y = elapsed * 0.08;
    }
    
    // Advanced Heartbeat Pulse on Planet (Lub-Dub physiological pattern)
    if (planetMeshRef.current) {
      const pulseSpeed = isSelected ? 4.5 : 2.5; 
      const t = elapsed * pulseSpeed;
      
      // Calculate dual peak heartbeat wave
      const lub = Math.max(0, Math.sin(t)) * Math.pow(Math.sin(t), 4) * 0.08;
      const dub = Math.max(0, Math.sin(t - 0.4)) * Math.pow(Math.sin(t - 0.4), 8) * 0.04;
      
      const pulseScale = 1.0 + (lub + dub) * (isSelected ? 1.4 : 0.85);
      planetMeshRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      
      // Synchronize glowing emissive intensity with physical heartbeat size!
      if (planetMeshRef.current.material) {
        const mat = planetMeshRef.current.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = isSelected 
          ? 0.4 + (lub + dub) * 3.8
          : 0.15 + (lub + dub) * 1.6;
      }
    }

    // Rotating geometric ring
    if (ringRef.current) {
      ringRef.current.rotation.z = -elapsed * 0.15;
    }
  });

  return (
    <group position={planet.position}>
      {/* Sci-fi relator wireframe rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[planet.size + 0.08, planet.size + 0.11, 48]} />
        <meshBasicMaterial color={planet.glowColor} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* 3D PENTAGONAL DOCK BELT */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.3, 0.1, 0]}>
        <cylinderGeometry args={[planet.size + 0.18, planet.size + 0.18, 0.06, 5, 1, true]} />
        <meshBasicMaterial color={planet.color} wireframe transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>

      {/* Main Celestial Body Sphere */}
      <mesh
        ref={planetMeshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(planet);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
          soundEngine.playPing();
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[planet.size, 48, 48]} />
        <meshStandardMaterial
          color={planet.color}
          metalness={0.25}
          roughness={0.55}
          emissive={planet.color}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Floating Name Overlay */}
      {(hovered || isSelected) && (
        <Html distanceFactor={6} position={[0, planet.size + 0.32, 0]} center pointerEvents="none">
          <div className="font-mono text-[8px] bg-slate-950/95 border border-cyan-500/40 text-cyan-400 font-bold px-2 py-0.5 rounded shadow-xl uppercase tracking-widest whitespace-nowrap select-none">
            {planet.name}
          </div>
        </Html>
      )}

      {/* PENTAGON INTERACTIVE INFOHUB BUTTON */}
      <Html distanceFactor={6} position={[planet.size + 0.35, -0.05, 0]} center>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(planet);
          }}
          className={`w-9 h-9 flex items-center justify-center bg-slate-950 border-2 transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg active:scale-90 ${
            isSelected 
              ? 'border-red-500 bg-red-950/30 text-red-300 ring-2 ring-red-500/20' 
              : 'border-cyan-400/90 text-cyan-400 hover:bg-cyan-500/20'
          }`}
          style={{ clipPath: 'polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)' }}
        >
          <span className="font-mono text-[8px] font-bold">P{index + 1}</span>
        </button>
      </Html>

      {/* Ambient Celestial Cloud */}
      <Sparkles count={15} scale={[planet.size * 1.5, planet.size * 1.5, planet.size * 1.5]} size={0.06} color={planet.glowColor} />
    </group>
  );
}
