"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

interface CampaignViewProps {
  goal?: {
    type: string;
  };
}

export function CampaignView({ goal }: CampaignViewProps) {
  if (!goal) return null;

  const campaignTasks = [
    {
      id: 1,
      title: "Create TikTok content",
      description: "Record a behind-the-scenes video of your creative process",
      deadline: "Today",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Schedule Instagram posts",
      description: "Prepare and schedule 3 posts for the week",
      deadline: "Tomorrow",
      status: "completed",
      priority: "medium",
    },
    {
      id: 3,
      title: "Engage with followers",
      description: "Respond to comments and DMs across platforms",
      deadline: "Today",
      status: "pending",
      priority: "medium",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Campaign Tasks</h2>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          View Calendar
        </Button>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {campaignTasks.map((task) => (
            <Card key={task.id} className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{task.title}</h3>
                    {task.priority === "high" && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-600">
                        High Priority
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Due {task.deadline}</span>
                  </div>
                </div>
                <Button
                  variant={task.status === "completed" ? "ghost" : "outline"}
                  size="sm"
                  className={task.status === "completed" ? "text-green-500" : ""}
                >
                  {task.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    "Complete"
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}