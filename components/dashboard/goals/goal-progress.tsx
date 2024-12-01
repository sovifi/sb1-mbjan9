"use client";

import { Card } from "@/components/ui/card";
import { BarChart2, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

interface GoalProgressProps {
  goal?: {
    type: string;
    target: number;
    metric: string;
    progress: number;
  };
}

export function GoalProgress({ goal }: GoalProgressProps) {
  if (!goal) return null;

  const dailyStats = [
    { label: "Today", value: 450, trend: "up", change: "+12%" },
    { label: "Yesterday", value: 380, trend: "down", change: "-5%" },
    { label: "This Week", value: 2250, trend: "up", change: "+8%" },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Progress Tracking</h2>
        <div className="p-2 rounded-full bg-primary/10">
          <BarChart2 className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className="grid gap-4">
        {dailyStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
            <div className={`flex items-center gap-1 ${
              stat.trend === "up" ? "text-green-500" : "text-red-500"
            }`}>
              {stat.trend === "up" ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Projected Growth</span>
          <div className="flex items-center text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">On Track</span>
          </div>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-green-500" style={{ width: "65%" }} />
        </div>
      </div>
    </Card>
  );
}