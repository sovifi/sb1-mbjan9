"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { MessageSquare, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Conversation {
  id: string;
  title: string;
  category: "content" | "audience" | "revenue" | "campaign";
  date: Date;
  preview: string;
}

const categoryColors = {
  content: "text-blue-500",
  audience: "text-green-500",
  revenue: "text-amber-500",
  campaign: "text-purple-500",
} as const;

interface ConversationListProps {
  onSelect: (conversation: Conversation) => void;
}

export function ConversationList({ onSelect }: ConversationListProps) {
  const [openMonths, setOpenMonths] = useState<string[]>([]);

  // Group conversations by month
  const conversations: Record<string, Conversation[]> = {
    "2024-03": [
      {
        id: "1",
        title: "Optimal Posting Schedule",
        category: "content",
        date: new Date("2024-03-15"),
        preview: "Analysis of best posting times for engagement",
      },
      {
        id: "2",
        title: "Audience Growth Strategy",
        category: "audience",
        date: new Date("2024-03-10"),
        preview: "Cross-platform audience development plan",
      },
    ],
    "2024-02": [
      {
        id: "3",
        title: "Merch Launch Planning",
        category: "revenue",
        date: new Date("2024-02-28"),
        preview: "Strategy for upcoming merchandise release",
      },
      {
        id: "4",
        title: "Release Campaign",
        category: "campaign",
        date: new Date("2024-02-15"),
        preview: "Multi-platform release strategy",
      },
    ],
  };

  const toggleMonth = (month: string) => {
    setOpenMonths(prev =>
      prev.includes(month)
        ? prev.filter(m => m !== month)
        : [...prev, month]
    );
  };

  return (
    <ScrollArea className="h-[calc(100vh-12rem)]">
      <div className="space-y-4 p-4">
        {Object.entries(conversations).map(([month, convos]) => (
          <Collapsible
            key={month}
            open={openMonths.includes(month)}
            onOpenChange={() => toggleMonth(month)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between"
              >
                <span className="font-semibold">
                  {format(new Date(month), "MMMM yyyy")}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2 mt-2">
                {convos.map((conversation) => (
                  <Button
                    key={conversation.id}
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto py-3"
                    onClick={() => onSelect(conversation)}
                  >
                    <MessageSquare className={`h-4 w-4 ${categoryColors[conversation.category]}`} />
                    <div className="text-left">
                      <div className="font-medium">{conversation.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {format(conversation.date, "MMM d")} · {conversation.preview}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </ScrollArea>
  );
}