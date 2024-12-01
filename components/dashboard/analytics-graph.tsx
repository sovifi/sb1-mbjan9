"use client";

import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { HotspotTooltip } from "./hotspot-tooltip";

const data = [
  { date: "2024-03-01", spotify: 400, instagram: 240, tiktok: 180 },
  { date: "2024-03-02", spotify: 300, instagram: 139, tiktok: 221 },
  { date: "2024-03-03", spotify: 520, instagram: 980, tiktok: 389 },
  { date: "2024-03-04", spotify: 270, instagram: 390, tiktok: 480 },
  { date: "2024-03-05", spotify: 400, instagram: 380, tiktok: 298 },
  { date: "2024-03-06", spotify: 389, instagram: 430, tiktok: 348 },
  { date: "2024-03-07", spotify: 600, instagram: 500, tiktok: 468 },
];

const hotspots = [
  {
    date: "2024-03-03",
    platform: "instagram",
    value: 980,
    insight: "Viral Reel Impact",
    description: "Your behind-the-scenes studio session Reel went viral, leading to a 312% increase in profile visits.",
  },
  {
    date: "2024-03-07",
    platform: "spotify",
    value: 600,
    insight: "Playlist Boost",
    description: "Your track was added to three influential playlists, resulting in a 54% streaming increase.",
  },
];

interface AnalyticsGraphProps {
  onHotspotClick?: (hotspot: typeof hotspots[0]) => void;
}

export function AnalyticsGraph({ onHotspotClick }: AnalyticsGraphProps) {
  const [activeHotspot, setActiveHotspot] = useState<typeof hotspots[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <Card className="p-6 relative" onMouseMove={handleMouseMove}>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="spotify"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="instagram"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="tiktok"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
            />
            {hotspots.map((hotspot, index) => (
              <ReferenceDot
                key={index}
                x={hotspot.date}
                y={hotspot.value}
                r={6}
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth={2}
                className="cursor-pointer animate-pulse"
                onMouseEnter={() => setActiveHotspot(hotspot)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => onHotspotClick?.(hotspot)}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      {activeHotspot && (
        <HotspotTooltip
          hotspot={activeHotspot}
          position={tooltipPos}
          onClick={() => onHotspotClick?.(activeHotspot)}
        />
      )}
    </Card>
  );
}