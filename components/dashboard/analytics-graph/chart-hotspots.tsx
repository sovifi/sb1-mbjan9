"use client";

import { ReferenceDot } from "recharts";
import type { hotspots } from "./chart-config";

interface ChartHotspotsProps {
  hotspots: typeof hotspots;
  onHotspotEnter: (hotspot: typeof hotspots[0]) => void;
  onHotspotLeave: () => void;
  onHotspotClick: (hotspot: typeof hotspots[0]) => void;
}

export function ChartHotspots({
  hotspots,
  onHotspotEnter,
  onHotspotLeave,
  onHotspotClick,
}: ChartHotspotsProps) {
  const renderHotspot = (hotspot: typeof hotspots[0], index: number) => {
    const commonProps = {
      x: hotspot.date,
      y: hotspot.value,
      stroke: "hsl(var(--primary))",
      className: "animate-pulse hotspot-glow cursor-pointer",
      isFront: true as const,
    };

    // Enhanced glow rings with larger radius and more opacity
    const glowRings = [
      { r: 180, opacity: 0.05, width: 1 },   // Increased from 120
      { r: 150, opacity: 0.1, width: 1.5 },  // Increased from 100
      { r: 120, opacity: 0.15, width: 2 },   // Increased from 80
      { r: 90, opacity: 0.2, width: 2.5 },   // Increased from 60
      { r: 60, opacity: 0.25, width: 3 },    // Increased from 40
    ];

    return (
      <g key={index}>
        {glowRings.map((ring, i) => (
          <ReferenceDot
            key={i}
            {...commonProps}
            r={ring.r}
            fill="transparent"
            strokeWidth={ring.width}
            strokeOpacity={ring.opacity}
          />
        ))}
        <ReferenceDot
          {...commonProps}
          r={45} // Increased from 30
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth={6} // Increased from 4
          className="cursor-pointer transition-transform hover:scale-150" // Increased scale on hover
          onMouseEnter={() => onHotspotEnter(hotspot)}
          onMouseLeave={onHotspotLeave}
          onClick={() => onHotspotClick(hotspot)}
        />
      </g>
    );
  };

  return <>{hotspots.map(renderHotspot)}</>;
}