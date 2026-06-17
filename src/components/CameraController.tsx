import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  targetPosition: [number, number, number] | null;
  orbitControlsRef: React.RefObject<any>;
}

export default function CameraController({ targetPosition, orbitControlsRef }: CameraControllerProps) {
  const { camera } = useThree();
  
  useFrame(() => {
    const controls = orbitControlsRef.current;
    if (targetPosition) {
      // Focus Camera onto docked planet perfectly
      const targetVec = new THREE.Vector3(
        targetPosition[0],
        targetPosition[1] + 0.25,
        targetPosition[2] + 2.0
      );
      camera.position.lerp(targetVec, 0.05);

      if (controls) {
        controls.target.lerp(new THREE.Vector3(...targetPosition), 0.05);
        controls.update();
      }
    } else {
      // Normal prime system view orbital position
      camera.position.lerp(new THREE.Vector3(0, 1.8, 6.0), 0.05);

      if (controls) {
        controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.05);
        controls.update();
      }
    }
  });

  return null;
}
