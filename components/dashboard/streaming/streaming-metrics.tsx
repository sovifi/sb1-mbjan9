"use client";

import { Card } from "@/components/ui/card";
import { AnalyticsGraph } from "@/components/dashboard/analytics-graph";
import { Music2, Youtube, ShoppingBag } from "lucide-react";

interface StreamingMetricsProps {
  timeframe: string;
}

export function StreamingMetrics({ timeframe }: StreamingMetricsProps) {
  const metrics = [
    {
      platform: "Spotify",
      streams: "12.5K",
      growth: "+15%",
      revenue: "$62.50",
      icon: Music2,
    },
    {
      platform: "YouTube",
      streams: "8.2K",
      growth: "+8%",
      revenue: "$41.00",
      icon: Youtube,
    },
    {
      platform: "Merch",
      streams: "45",
      growth: "+25%",
      revenue: "$1,125.00",
      icon: ShoppingBag,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.platform} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{metric.platform}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">
                    {metric.platform === "Merch" ? metric.streams + " orders" : metric.streams}
                  </p>
                  <span className="text-sm text-green-500">{metric.growth}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Revenue: {metric.revenue}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <AnalyticsGraph onHotspotClick={(hotspot) => {
          console.log("Clicked hotspot:", hotspot);
        }} />
      </Card>
    </div>
  );
}