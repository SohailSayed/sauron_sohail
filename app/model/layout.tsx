"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/house.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={0.0005}
      position={[0, 0, 0]}
    />
  );
}

export default function ModelLayout() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [-25, 10, 10], fov: 45 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.8}
          minDistance={2}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}
