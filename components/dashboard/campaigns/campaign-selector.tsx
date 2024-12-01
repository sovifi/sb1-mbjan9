"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FolderOpen } from "lucide-react";

interface CampaignSelectorProps {
  selectedCampaignId: string | null;
  onSelect: (campaignId: string | null) => void;
}

export function CampaignSelector({ selectedCampaignId, onSelect }: CampaignSelectorProps) {
  const campaigns = [
    {
      id: "1",
      title: "Summer Release Campaign",
    },
    {
      id: "2",
      title: "TikTok Growth Initiative",
    },
    {
      id: "3",
      title: "Merch Launch",
    },
  ];

  return (
    <Select
      value={selectedCampaignId || "all"}
      onValueChange={(value) => onSelect(value === "all" ? null : value)}
    >
      <SelectTrigger className="w-[250px]">
        <div className="flex items-center gap-2">
          <FolderOpen className="h-4 w-4" />
          <SelectValue placeholder="Select Campaign" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Campaigns</SelectItem>
        {campaigns.map((campaign) => (
          <SelectItem key={campaign.id} value={campaign.id}>
            {campaign.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}