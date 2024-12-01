"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface HotspotTooltipProps {
  hotspot: {
    insight: string;
    description: string;
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
      <h4 className="font-semibold mb-2">{hotspot.insight}</h4>
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