"use client";

import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import localFont from "next/font/local";

const sonomaMed = localFont({ src: "../fonts/BRSonoma-Medium.otf" });

function Model({ clipY }: { clipY: number }) {
  const gltf = useGLTF("/house.glb");

  useEffect(() => {
    const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), clipY);
    gltf.scene.traverse((child) => {
      if ((child as any).isMesh) {
        (child as any).material.clippingPlanes = [clippingPlane];
      }
    });
  }, [gltf, clipY]);

  return (
    <primitive object={gltf.scene} scale={0.0005} position={[0, 0, 0]} />
  );
}

export default function ModelLayout() {
  const [yCross, setYCross] = useState(4);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "absolute", top: 40, right: 40, zIndex: 1, 
                    background: "rgba(220, 205, 194, 0.95)", 
                    padding: "0.5rem", borderRadius: "1.5vh", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2);" }}>
        <p className={sonomaMed.className} style={{margin: "0", fontSize: "16px"}}>
          Cross-section: 
          <input
            type="range"
            min={0.11}
            max={4}
            step={0.001}
            value={yCross}
            onChange={(e) => setYCross(e.target.value)}
            style={{ 
              width: "200px",
              marginLeft: "10px",
              accentColor: "#8B5C2A", 
              height: "10px",
              background: "#cbb292", 
              borderRadius: "4px" }}
          />
        </p>
      </div>

      <Canvas
        camera={{ position: [-25, 10, 10], fov: 45 }}
        gl={{ localClippingEnabled: true }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model clipY={yCross} />
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
