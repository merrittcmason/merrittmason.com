"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";

export default function TiltCard({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setT({ x: -py * 10, y: px * 12 });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ ...style, transform: `perspective(1100px) rotateX(${t.x}deg) rotateY(${t.y}deg)`, transition: "transform 0.25s ease" }}
      className={className}
    >
      {children}
    </div>
  );
}
