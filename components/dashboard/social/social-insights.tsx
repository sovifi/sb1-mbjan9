"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, ShoppingBag } from "lucide-react";

interface SocialInsightsProps {
  timeframe: string;
}

export function SocialInsights({ timeframe }: SocialInsightsProps) {
  const insights = [
    {
      id: 1,
      platform: "TikTok",
      insight: "Viral Potential",
      description: "Your studio session video format is gaining traction. Similar content has led to +25% Spotify streams.",
      impact: "High",
      type: "content",
    },
    {
      id: 2,
      platform: "Instagram",
      insight: "Merch Opportunity",
      description: "High engagement on your latest post indicates strong merch potential. Consider a limited drop.",
      impact: "High",
      type: "merch",
    },
    {
      id: 3,
      platform: "Instagram",
      insight: "Story Performance",
      description: "Stories with Spotify links get 2x more clicks than feed posts. Consider increasing story frequency.",
      impact: "Medium",
      type: "content",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Social Media Impact</h2>
        <div className="p-2 rounded-full bg-primary/10">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <Card key={insight.id} className="p-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{insight.platform}: {insight.insight}</h3>
                    {insight.type === "merch" && (
                      <ShoppingBag className="h-4 w-4 text-purple-500" />
                    )}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {insight.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {insight.description}
                </p>
              </div>
              <Button size="sm" className="w-full gap-2">
                View Details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}