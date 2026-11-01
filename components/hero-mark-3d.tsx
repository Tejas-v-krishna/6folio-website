"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import SixMark from "@/components/six-mark";

function Mark() {
  const group = useRef<THREE.Group>(null);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const r = 1.15;
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) s.moveTo(x, y);
      else s.lineTo(x, y);
    }
    s.closePath();

    const hole = new THREE.Path();
    const hr = 0.68;
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3;
      const x = Math.cos(a) * hr;
      const y = Math.sin(a) * hr;
      if (i === 0) hole.moveTo(x, y);
      else hole.lineTo(x, y);
    }
    hole.closePath();
    s.holes.push(hole);
    return s;
  }, []);

  const geometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(shape, {
        depth: 0.32,
        bevelEnabled: true,
        bevelThickness: 0.035,
        bevelSize: 0.035,
        bevelSegments: 3,
      }),
    [shape]
  );

  const texture = useMemo(() => {
    if (typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, 512, 256);
      ctx.fillStyle = "#0a0a0a";
      ctx.font = "800 150px Inter Tight, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("6F", 256, 128);
      ctx.fillStyle = "#1a2bff";
      ctx.fillRect(120, 200, 272, 6);
    }
    const t = new THREE.CanvasTexture(canvas);
    t.needsUpdate = true;
    return t;
  }, []);

  useFrame((state) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
  });

  return (
    <group ref={group}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color="#b9b3a6"
          metalness={0.25}
          roughness={0.55}
        />
      </mesh>
      <mesh position={[0, 0, 0.36]}>
        <planeGeometry args={[1.5, 0.75]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function HeroMark3D() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);

    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    const fallback = window.setTimeout(() => {
      if (!gl) setWebgl(false);
    }, 0);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  if (!webgl) {
    return (
      <div className="h-full w-full">
        <SixMark />
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="h-full w-full">
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={1.0} />
        <pointLight position={[-2, -1, 2]} intensity={0.8} color="#1a2bff" />
        <Mark />
      </Canvas>
    </div>
  );
}
