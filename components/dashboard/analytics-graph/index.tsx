"use client";

import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { HotspotTooltip } from "./hotspot-tooltip";
import { ChartLine } from "./chart-line";
import { ChartHotspots } from "./chart-hotspots";
import { chartData, hotspots, platformColors } from "./chart-config";

interface AnalyticsGraphProps {
  onHotspotClick?: (hotspot: typeof hotspots[0]) => void;
}

export function AnalyticsGraph({ onHotspotClick }: AnalyticsGraphProps) {
  const [activeHotspot, setActiveHotspot] = useState<typeof hotspots[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  }, []);

  const platformLabels = {
    spotify: "Spotify",
    youtube: "YouTube Music",
    instagram: "Instagram",
    tiktok: "TikTok",
    x: "X (Twitter)",
    threads: "Threads"
  };

  const xAxisProps = {
    dataKey: "date",
    axisLine: { stroke: 'hsl(var(--border))' },
    tick: { fill: 'hsl(var(--foreground))' },
    height: 60,
    tickMargin: 16,
    padding: { left: 0, right: 0 },
  };

  const yAxisProps = {
    axisLine: { stroke: 'hsl(var(--border))' },
    tick: { fill: 'hsl(var(--foreground))' },
    width: 80,
    tickMargin: 16,
    padding: { top: 0, bottom: 0 },
  };

  const tooltipProps = {
    contentStyle: {
      backgroundColor: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      padding: '12px',
    },
    labelStyle: { 
      color: 'hsl(var(--foreground))',
      marginBottom: '8px',
    },
    itemStyle: {
      color: 'hsl(var(--foreground))',
    },
    cursor: { stroke: 'hsl(var(--border))' },
  };

  return (
    <Card className="p-6 relative" onMouseMove={handleMouseMove}>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 16, right: 16, bottom: 16, left: 16 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              opacity={0.3}
            />
            <XAxis {...xAxisProps} />
            <YAxis {...yAxisProps} />
            <Tooltip {...tooltipProps} />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              formatter={(value: keyof typeof platformLabels) => (
                <span style={{ color: 'hsl(var(--foreground))' }}>
                  {platformLabels[value]}
                </span>
              )}
            />
            {Object.entries(platformColors).map(([platform, color]) => (
              <ChartLine 
                key={platform} 
                dataKey={platform} 
                color={color}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--background))' }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            ))}
            <ChartHotspots
              hotspots={hotspots}
              onHotspotEnter={setActiveHotspot}
              onHotspotLeave={() => setActiveHotspot(null)}
              onHotspotClick={(hotspot) => onHotspotClick?.(hotspot)}
            />
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