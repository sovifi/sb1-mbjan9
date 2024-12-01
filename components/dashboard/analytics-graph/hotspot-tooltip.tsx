"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp } from "lucide-react";

interface HotspotTooltipProps {
  hotspot: {
    insight: string;
    description: string;
    platform: string;
    value: number;
  };
  position: {
    x: number;
    y: number;
  };
  onClick: () => void;
}

export function HotspotTooltip({ hotspot, position, onClick }: HotspotTooltipProps) {
  return (
    <Card
      className="absolute z-50 p-4 w-[300px] shadow-lg animate-in fade-in-0 zoom-in-95"
      style={{
        left: `${position.x + 16}px`,
        top: `${position.y - 100}px`,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-full bg-primary/10">
          <TrendingUp className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold leading-none">{hotspot.insight}</h4>
          <p className="text-sm text-muted-foreground mt-1">
            {hotspot.platform.charAt(0).toUpperCase() + hotspot.platform.slice(1)}
          </p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{hotspot.description}</p>
      <Button
        size="sm"
        variant="secondary"
        className="w-full"
        onClick={onClick}
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Discuss Strategy
      </Button>
    </Card>
  );
}