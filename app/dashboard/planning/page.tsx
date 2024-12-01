"use client";

import { useState } from "react";
import { QuarterlyOverview } from "@/components/dashboard/planning/quarterly-overview";
import { PlanningAgent } from "@/components/dashboard/planning/planning-agent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function PlanningPage() {
  const [selectedQuarter, setSelectedQuarter] = useState("2024-Q2");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quarterly Planning</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="planning">AI Planning Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <QuarterlyOverview
            quarter={selectedQuarter}
            onQuarterChange={setSelectedQuarter}
          />
        </TabsContent>

        <TabsContent value="planning">
          <Card className="p-6">
            <PlanningAgent quarter={selectedQuarter} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}