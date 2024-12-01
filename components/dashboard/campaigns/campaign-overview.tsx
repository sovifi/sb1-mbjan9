"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, MessageSquare, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface CampaignOverviewProps {
  campaignId: string;
}

export function CampaignOverview({ campaignId }: CampaignOverviewProps) {
  const router = useRouter();
  
  // Mock campaign data - in production, fetch this based on campaignId
  const campaign = {
    id: campaignId,
    title: "Summer Release Campaign",
    status: "active",
    progress: 65,
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    messageCount: 24,
    insights: 8,
    tasks: {
      total: 12,
      completed: 8,
    },
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">{campaign.title}</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                {new Date(campaign.endDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              <span>{campaign.tasks.completed}/{campaign.tasks.total} tasks completed</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{campaign.messageCount} messages</span>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => router.push(`/dashboard/campaigns/${campaign.id}`)}
        >
          Campaign Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Campaign Progress</span>
          <span>{campaign.progress}%</span>
        </div>
        <Progress value={campaign.progress} />
      </div>
    </Card>
  );
}