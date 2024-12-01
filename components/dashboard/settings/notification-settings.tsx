"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "performance-alerts",
      title: "Performance Alerts",
      description: "Get notified when there are significant changes in your streaming or social media performance",
      enabled: true,
    },
    {
      id: "ai-insights",
      title: "AI Insights",
      description: "Receive notifications when AI identifies new opportunities or trends",
      enabled: true,
    },
    {
      id: "account-sync",
      title: "Account Sync Updates",
      description: "Be notified about successful account synchronizations and any issues",
      enabled: false,
    },
    {
      id: "marketing-tips",
      title: "Marketing Tips",
      description: "Get actionable marketing suggestions based on your performance",
      enabled: true,
    },
  ]);

  const toggleSetting = (settingId: string) => {
    setSettings(settings.map(setting => {
      if (setting.id === settingId) {
        return { ...setting, enabled: !setting.enabled };
      }
      return setting;
    }));
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
      <div className="space-y-6">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between space-x-4"
          >
            <div className="space-y-1">
              <Label htmlFor={setting.id} className="text-base">
                {setting.title}
              </Label>
              <p className="text-sm text-muted-foreground">
                {setting.description}
              </p>
            </div>
            <Switch
              id={setting.id}
              checked={setting.enabled}
              onCheckedChange={() => toggleSetting(setting.id)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}