"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Calendar, Edit } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface GoalHeaderProps {
  goal?: {
    type: string;
    target: number;
    metric: string;
    deadline: Date;
    progress: number;
  };
  onEditGoal: () => void;
}

export function GoalHeader({ goal, onEditGoal }: GoalHeaderProps) {
  if (!goal) return null;

  const timeLeft = formatDistanceToNow(goal.deadline, { addSuffix: true });
  const progressPercentage = (goal.progress / goal.target) * 100;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {goal.type}: {goal.target} {goal.metric}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due {timeLeft}</span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={onEditGoal}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Goal
        </Button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{progressPercentage.toFixed(1)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </Card>
  );
}