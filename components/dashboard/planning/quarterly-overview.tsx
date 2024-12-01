"use client";

import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, TrendingUp, Users } from "lucide-react";

interface QuarterlyOverviewProps {
  quarter: string;
  onQuarterChange: (quarter: string) => void;
}

export function QuarterlyOverview({ quarter, onQuarterChange }: QuarterlyOverviewProps) {
  const goals = [
    {
      id: 1,
      title: "Audience Growth",
      target: "50K followers",
      progress: 65,
      icon: Users,
      category: "growth",
    },
    {
      id: 2,
      title: "Content Calendar",
      target: "90% completion",
      progress: 80,
      icon: Calendar,
      category: "content",
    },
    {
      id: 3,
      title: "Revenue Target",
      target: "$10K MRR",
      progress: 45,
      icon: TrendingUp,
      category: "revenue",
    },
    {
      id: 4,
      title: "Platform Integration",
      target: "All platforms",
      progress: 90,
      icon: Target,
      category: "technical",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Quarterly Goals</h2>
        <Select value={quarter} onValueChange={onQuarterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select quarter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024-Q1">Q1 2024</SelectItem>
            <SelectItem value="2024-Q2">Q2 2024</SelectItem>
            <SelectItem value="2024-Q3">Q3 2024</SelectItem>
            <SelectItem value="2024-Q4">Q4 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <Card key={goal.id} className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <goal.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">Target: {goal.target}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}