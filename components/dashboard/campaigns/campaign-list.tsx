"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, BarChart2, MessageSquare, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Campaign {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "draft";
  progress: number;
  startDate: string;
  endDate: string;
  messageCount: number;
  insights: number;
}

export function CampaignList() {
  const router = useRouter();
  const [campaigns] = useState<Campaign[]>([
    {
      id: "1",
      title: "Summer Release Campaign",
      description: "Album release marketing campaign across all platforms",
      status: "active",
      progress: 65,
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      messageCount: 24,
      insights: 8,
    },
    {
      id: "2",
      title: "TikTok Growth Initiative",
      description: "Focused effort to grow TikTok following and engagement",
      status: "active",
      progress: 30,
      startDate: "2024-05-15",
      endDate: "2024-07-15",
      messageCount: 12,
      insights: 5,
    },
    {
      id: "3",
      title: "Merch Launch",
      description: "Limited edition merchandise release campaign",
      status: "draft",
      progress: 0,
      startDate: "2024-07-01",
      endDate: "2024-08-31",
      messageCount: 0,
      insights: 0,
    },
  ]);

  const statusColors = {
    active: "bg-green-500/10 text-green-500",
    completed: "bg-blue-500/10 text-blue-500",
    draft: "bg-orange-500/10 text-orange-500",
  };

  return (
    <div className="grid gap-4">
      {campaigns.map((campaign) => (
        <Card key={campaign.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{campaign.title}</h3>
                <Badge
                  variant="secondary"
                  className={statusColors[campaign.status]}
                >
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </Badge>
              </div>
              <p className="text-muted-foreground">{campaign.description}</p>
            </div>
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => router.push(`/dashboard/campaigns/${campaign.id}`)}
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                    {new Date(campaign.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>{campaign.messageCount} messages</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <BarChart2 className="h-4 w-4" />
                  <span>{campaign.insights} insights</span>
                </div>
              </div>
              <span className="font-medium">{campaign.progress}%</span>
            </div>
            <Progress value={campaign.progress} />
          </div>
        </Card>
      ))}
    </div>
  );
}