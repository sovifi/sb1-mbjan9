"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ArrowRight } from "lucide-react";

interface ActionQueueProps {
  goal?: {
    type: string;
  };
}

export function ActionQueue({ goal }: ActionQueueProps) {
  if (!goal) return null;

  const actions = [
    {
      id: 1,
      title: "Create TikTok Using Trending Sound",
      description: "The sound 'Running Up That Hill' is trending. Create a video showcasing your music production process.",
      impact: "High",
      effort: "Low",
      category: "content",
    },
    {
      id: 2,
      title: "Cross-Promote on Instagram",
      description: "Share your latest Spotify milestone on Instagram Stories with a swipe-up link.",
      impact: "Medium",
      effort: "Low",
      category: "promotion",
    },
    {
      id: 3,
      title: "Engage with Similar Artists",
      description: "Comment and interact with 5 similar artists in your genre to build connections.",
      impact: "Medium",
      effort: "Medium",
      category: "networking",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recommended Actions</h2>
        <div className="p-2 rounded-full bg-primary/10">
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        {actions.map((action) => (
          <Card key={action.id} className="p-4">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge variant="secondary">
                    Impact: {action.impact}
                  </Badge>
                  <Badge variant="outline">
                    Effort: {action.effort}
                  </Badge>
                </div>
                <Button size="sm" className="gap-2">
                  Take Action
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}