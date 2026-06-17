import { useMemo } from 'react';
import * as THREE from 'three';

export default function NebulaeBackground() {
  const clusters = useMemo(() => {
    const list = [];
    const colors = ['#a855f7', '#3b82f6', '#4f46e5', '#6366f1', '#7c3aed']; // Gorgeous cosmos color palette (Purples & Blues)
    
    // Generate 35 cloud-like cosmic coordinates distributed throughout the outer systems
    for (let i = 0; i < 35; i++) {
      const radius = 35 + Math.random() * 55; // Situate nebulas away from the inner planet system
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const size = 5 + Math.random() * 10; // Extra soft, voluminous cloud formations
      const color = colors[Math.floor(Math.random() * colors.length)];
      list.push({ x, y, z, size, color });
    }
    return list;
  }, []);

  return (
    <group>
      {clusters.map((c, i) => (
        <mesh key={i} position={[c.x, c.y, c.z]}>
          <sphereGeometry args={[c.size, 16, 16]} />
          <meshStandardMaterial
            color={c.color}
            transparent={true}
            opacity={0.06}
            emissive={c.color}
            emissiveIntensity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
