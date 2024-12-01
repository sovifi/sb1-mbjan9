"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ActionableInsights() {
  const actions = [
    {
      id: 1,
      title: "Capitalize on TikTok Momentum",
      description: "Create 2 more studio session videos this week while the format is trending.",
      effort: "Medium",
      expectedImpact: "+15% streams",
      type: "content",
    },
    {
      id: 2,
      title: "Launch Limited Edition Merch",
      description: "Your recent viral TikTok presents an opportunity for a limited edition t-shirt featuring your lyrics.",
      effort: "Medium",
      expectedImpact: "$2.5K revenue",
      type: "merch",
    },
    {
      id: 3,
      title: "Bundle Deal Promotion",
      description: "Offer a special bundle: Limited edition vinyl + exclusive merchandise at a 15% discount.",
      effort: "Low",
      expectedImpact: "+25% sales",
      type: "merch",
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
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{action.title}</h3>
                    {action.type === "merch" && (
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        Merch
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Effort: {action.effort}
                </span>
                <span className="text-green-500">
                  Expected: {action.expectedImpact}
                </span>
              </div>
              <Button size="sm" className="w-full gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}