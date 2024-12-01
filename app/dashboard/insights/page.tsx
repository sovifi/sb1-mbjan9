"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AdviceCard } from "@/components/dashboard/ai-advice/advice-card";
import { AdviceThread } from "@/components/dashboard/ai-advice/advice-thread";
import {
  BarChart2,
  Users,
  TrendingUp,
  Calendar,
  Music2,
  Share2,
  ShoppingBag,
  Target,
} from "lucide-react";

export default function InsightsPage() {
  const [selectedAdvice, setSelectedAdvice] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState("7");

  const insights = [
    {
      id: "content-timing",
      category: "content",
      title: "Optimal Posting Schedule",
      description: "Your content performs best when posted between 6-8 PM EST. This timing aligns with your audience's peak engagement hours.",
      icon: <Calendar className="h-6 w-6" />,
      metrics: [
        { label: "Engagement Rate", value: "+45%" },
        { label: "Best Time", value: "6-8 PM EST" },
      ],
      message: "I've analyzed your content performance across different time slots. The 6-8 PM EST window consistently shows higher engagement rates. Would you like to explore a content calendar optimized for these hours?",
    },
    {
      id: "audience-growth",
      category: "audience",
      title: "Cross-Platform Growth",
      description: "Your TikTok followers are highly likely to follow you on Spotify. Consider cross-promoting your music more actively.",
      icon: <Users className="h-6 w-6" />,
      metrics: [
        { label: "Conversion Rate", value: "32%" },
        { label: "Potential Reach", value: "12.4K" },
      ],
      message: "Your TikTok audience shows strong interest in your music. Let's develop a strategy to convert more followers into active Spotify listeners.",
    },
    {
      id: "revenue-merch",
      category: "revenue",
      title: "Merch Opportunity",
      description: "Based on recent engagement patterns, your audience is showing interest in behind-the-scenes content.",
      icon: <ShoppingBag className="h-6 w-6" />,
      metrics: [
        { label: "Estimated Demand", value: "High" },
        { label: "Potential Revenue", value: "$2.5K/mo" },
      ],
      message: "I've noticed strong engagement with your studio content. This could be an excellent opportunity to launch merchandise. Would you like to explore some merchandise concepts?",
    },
    {
      id: "campaign-release",
      category: "campaign",
      title: "Release Strategy",
      description: "Your next release could benefit from a coordinated cross-platform campaign.",
      icon: <Target className="h-6 w-6" />,
      metrics: [
        { label: "Expected Impact", value: "+85%" },
        { label: "Timeline", value: "4 weeks" },
      ],
      message: "Based on your recent performance, I can help you plan a comprehensive release strategy. Shall we discuss the key elements and timeline?",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">AI Insights & Recommendations</h1>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="14">Last 14 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {selectedAdvice ? (
          <AdviceThread
            title={insights.find((i) => i.id === selectedAdvice)?.title || ""}
            initialMessage={
              insights.find((i) => i.id === selectedAdvice)?.message || ""
            }
            onClose={() => setSelectedAdvice(null)}
          />
        ) : null}
        <div className="space-y-6">
          {insights.map((insight) => (
            <AdviceCard
              key={insight.id}
              title={insight.title}
              description={insight.description}
              category={insight.category as any}
              icon={insight.icon}
              metrics={insight.metrics}
              onClick={() => setSelectedAdvice(insight.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}