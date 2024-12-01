"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdviceCardProps {
  title: string;
  description: string;
  category: "content" | "audience" | "revenue" | "campaign";
  icon: React.ReactNode;
  metrics?: {
    label: string;
    value: string;
  }[];
  onClick?: () => void;
  className?: string;
}

const categoryColors = {
  content: "bg-blue-500/10 text-blue-500",
  audience: "bg-green-500/10 text-green-500",
  revenue: "bg-amber-500/10 text-amber-500",
  campaign: "bg-purple-500/10 text-purple-500",
} as const;

export function AdviceCard({
  title,
  description,
  category,
  icon,
  metrics,
  onClick,
  className,
}: AdviceCardProps) {
  return (
    <Card className={cn("p-6 space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={cn("p-3 rounded-full", categoryColors[category])}>
            {icon}
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
      {metrics && (
        <div className="grid grid-cols-2 gap-4 pt-2">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-lg font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>
      )}
      <Button onClick={onClick} className="w-full gap-2">
        <MessageSquare className="h-4 w-4" />
        Discuss Strategy
        <ArrowRight className="h-4 w-4 ml-auto" />
      </Button>
    </Card>
  );
}