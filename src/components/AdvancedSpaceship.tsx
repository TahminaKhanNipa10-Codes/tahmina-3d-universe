import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { ProjectData } from '../constants/projects';

interface Particle {
  id: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: string;
  alpha: number;
  scale: number;
}

interface AdvancedSpaceshipProps {
  selectedPlanet: ProjectData | null;
}

export default function AdvancedSpaceship({ selectedPlanet }: AdvancedSpaceshipProps) {
  const shipRef = useRef<THREE.Group>(null);
  const thrusterRef = useRef<THREE.Group>(null);
  const trailGroupRef = useRef<THREE.Group>(null);

  // Maintain space-dust trail particles
  const [trail, setTrail] = useState<Particle[]>([]);
  const trailIdCounter = useRef(0);
  const spawnTimer = useRef(0);

  useFrame((state, delta) => {
    if (!shipRef.current) return;

    if (selectedPlanet) {
      // Approach planet position with offset
      const targetPos = new THREE.Vector3(
        selectedPlanet.position[0],
        selectedPlanet.position[1] + selectedPlanet.size * 0.15,
        selectedPlanet.position[2] + selectedPlanet.size * 0.82
      );
      shipRef.current.position.lerp(targetPos, 0.05);

      // Scale down representing remote landing alignment
      const targetScale = new THREE.Vector3(0.08, 0.08, 0.08);
      shipRef.current.scale.lerp(targetScale, 0.05);

      // Smoothly tilt slightly when landing/approaching planet matching coordinates
      const pointer = state.pointer || (state as any).mouse || { x: 0, y: 0 };
      const targetRotX = -pointer.y * 0.15;
      const targetRotY = pointer.x * 0.22;
      const targetRotZ = -pointer.x * 0.15;
      
      shipRef.current.rotation.x = THREE.MathUtils.lerp(shipRef.current.rotation.x, targetRotX, 0.05);
      shipRef.current.rotation.y = THREE.MathUtils.lerp(shipRef.current.rotation.y, targetRotY, 0.05);
      shipRef.current.rotation.z = THREE.MathUtils.lerp(shipRef.current.rotation.z, targetRotZ, 0.05);
    } else {
      // Default flight location
      const defaultPos = new THREE.Vector3(0, 0, 0);
      const defaultScale = new THREE.Vector3(1, 1, 1);
      
      shipRef.current.position.lerp(defaultPos, 0.04);
      shipRef.current.scale.lerp(defaultScale, 0.04);

      // Space floating pitch animation + mouse feedback roll, yaw, pitch
      const t = state.clock.getElapsedTime();
      shipRef.current.position.y = Math.sin(t * 1.0) * 0.08;

      const pointer = state.pointer || (state as any).mouse || { x: 0, y: 0 };
      const targetRotX = -pointer.y * 0.4 + Math.cos(t * 0.4) * 0.03;
      const targetRotY = pointer.x * 0.5;
      const targetRotZ = -pointer.x * 0.35 + Math.sin(t * 0.6) * 0.04;

      shipRef.current.rotation.x = THREE.MathUtils.lerp(shipRef.current.rotation.x, targetRotX, 0.05);
      shipRef.current.rotation.y = THREE.MathUtils.lerp(shipRef.current.rotation.y, targetRotY, 0.05);
      shipRef.current.rotation.z = THREE.MathUtils.lerp(shipRef.current.rotation.z, targetRotZ, 0.05);
    }

    // ---- Plume trail engine generation ----
    if (thrusterRef.current && trailGroupRef.current) {
      const newParticles: Particle[] = [];
      spawnTimer.current += delta;
      
      if (spawnTimer.current > 0.04) {
        spawnTimer.current = 0;

        const worldPos = new THREE.Vector3();
        thrusterRef.current.getWorldPosition(worldPos);
        const localPos = trailGroupRef.current.worldToLocal(worldPos.clone());
        const shipScale = shipRef.current.scale.x;

        const neonColors = ['#00ffcc', '#ff0055', '#00ffff', '#9333ea'];
        
        // Spawn Dual Plumes lines with safe offsets
        for (let i = 0; i < 2; i++) {
          const offsetX = (i === 0 ? -0.07 : 0.07) * shipScale;
          const nozzleOffset = new THREE.Vector3(offsetX, -0.08 * shipScale, 0);
          nozzleOffset.applyQuaternion(shipRef.current.quaternion);

          const particlePos = localPos.clone().add(nozzleOffset);

          // Velocity drifting strictly backwards from alignment
          const drift = new THREE.Vector3(
            -1.2 * shipScale, 
            (Math.random() - 0.5) * 0.15 * shipScale, 
            (Math.random() - 0.5) * 0.15 * shipScale
          );
          drift.applyQuaternion(shipRef.current.quaternion);

          trailIdCounter.current += 1;
          newParticles.push({
            id: trailIdCounter.current,
            position: particlePos,
            scale: (0.03 + Math.random() * 0.02) * shipScale,
            color: neonColors[Math.floor(Math.random() * neonColors.length)],
            velocity: drift,
            alpha: 0.9
          });
        }
      }

      // Update, fade and shrink the trail dynamically so NO permanent footmarks are stored
      setTrail((prev) => {
        const updated = prev
          .map((p) => {
            const nextPos = p.position.clone().add(p.velocity.clone().multiplyScalar(delta));
            return {
              ...p,
              position: nextPos,
              alpha: p.alpha - delta * 2.2, // fast fading
              scale: p.scale - delta * p.scale * 1.5,
            };
          })
          .filter((p) => p.alpha > 0 && p.scale > 0.001);

        return [...updated, ...newParticles].slice(-45); // Keep memory footprint small
      });
    }
  });

  return (
    <group>
      {/* 3D Trail Rendering Group */}
      <group ref={trailGroupRef}>
        {trail.map((p) => (
          <mesh key={p.id} position={p.position} scale={p.scale}>
            <sphereGeometry args={[1, 4, 4]} />
            <meshBasicMaterial color={p.color} transparent opacity={p.alpha} depthWrite={false} />
          </mesh>
        ))}
      </group>

      {/* Main Spaceship Assembly */}
      <group ref={shipRef}>
        <group rotation={[0, Math.PI / 2, 0]}>
          {/* Main Hull Body (Cylinder) */}
          <mesh castShadow>
            <cylinderGeometry args={[0.11, 0.15, 1.0, 5]} />
            <meshStandardMaterial color="#f8fafc" metalness={0.96} roughness={0.1} />
          </mesh>

          {/* Glowing Nose cockpit */}
          <mesh position={[0, 0.52, 0]}>
            <coneGeometry args={[0.11, 0.28, 16]} />
            <meshStandardMaterial color="#00ffcc" metalness={0.9} roughness={0.05} emissive="#00ffcc" emissiveIntensity={2.5} />
          </mesh>

          {/* Swept carbon armor plates */}
          <mesh position={[0, -0.05, 0]}>
            <boxGeometry args={[0.24, 0.45, 0.2]} />
            <meshStandardMaterial color="#090d16" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Metallic sweep wings */}
          <mesh position={[0, -0.22, 0]}>
            <boxGeometry args={[0.85, 0.03, 0.24]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
          </mesh>

          {/* Twin Rocket exhaust block assembly */}
          <group ref={thrusterRef} position={[0, -0.54, 0]}>
            <mesh position={[-0.07, 0, 0]}>
              <cylinderGeometry args={[0.038, 0.038, 0.1, 10]} />
              <meshStandardMaterial color="#475569" metalness={0.9} />
            </mesh>
            <mesh position={[0.07, 0, 0]}>
              <cylinderGeometry args={[0.038, 0.038, 0.1, 10]} />
              <meshStandardMaterial color="#475569" metalness={0.9} />
            </mesh>
            
            <pointLight position={[0, -0.15, 0]} color="#ff0055" intensity={3} distance={2.5} />
            <Sparkles count={8} scale={0.25} size={1.2} color="#00ffcc" />
          </group>
        </group>
      </group>
    </group>
  );
}
