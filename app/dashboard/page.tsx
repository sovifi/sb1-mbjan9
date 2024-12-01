"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StreamingMetrics } from "@/components/dashboard/streaming/streaming-metrics";
import { SocialInsights } from "@/components/dashboard/social/social-insights";
import { ActionableInsights } from "@/components/dashboard/insights/actionable-insights";
import { CampaignSelector } from "@/components/dashboard/campaigns/campaign-selector";
import { CampaignOverview } from "@/components/dashboard/campaigns/campaign-overview";

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("7");
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <CampaignSelector
          selectedCampaignId={selectedCampaignId}
          onSelect={setSelectedCampaignId}
        />
      </div>

      {selectedCampaignId && <CampaignOverview campaignId={selectedCampaignId} />}

      <div className="grid gap-6">
        <StreamingMetrics 
          timeframe={timeframe} 
          campaignId={selectedCampaignId}
        />
        
        <div className="grid lg:grid-cols-2 gap-6">
          <SocialInsights 
            timeframe={timeframe}
            campaignId={selectedCampaignId}
          />
          <ActionableInsights 
            campaignId={selectedCampaignId}
          />
        </div>
      </div>
    </div>
  );
}