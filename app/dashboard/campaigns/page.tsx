"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FolderOpen } from "lucide-react";
import { CampaignList } from "@/components/dashboard/campaigns/campaign-list";
import { CampaignDialog } from "@/components/dashboard/campaigns/campaign-dialog";

export default function CampaignsPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <p className="text-muted-foreground">
            Organize your marketing efforts and track progress
          </p>
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <div className="grid gap-6">
        <CampaignList />
      </div>

      <CampaignDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />
    </div>
  );
}