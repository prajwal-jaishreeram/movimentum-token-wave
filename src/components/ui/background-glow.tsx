import React from "react";

interface BackgroundGlowProps {
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BackgroundGlow({
  colorFrom = "#6b3a1a",
  colorTo = "#1a0e05",
  className = "",
  style = {},
}: BackgroundGlowProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 60%, ${colorFrom} 0%, ${colorTo} 80%)`,
        filter: "blur(160px)",
        opacity: 0.18,
        ...style,
      }}
    />
  );
} 