"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { Instagram, Music2, Youtube } from "lucide-react";

interface ConnectedAccount {
  id: string;
  platform: string;
  username: string;
  connected: boolean;
  lastSync?: string;
}

export function AccountConnections() {
  const [accounts, setAccounts] = useState<ConnectedAccount[]>([
    {
      id: "spotify",
      platform: "Spotify",
      username: "",
      connected: false,
    },
    {
      id: "youtube",
      platform: "YouTube Music",
      username: "",
      connected: false,
    },
    {
      id: "instagram",
      platform: "Instagram",
      username: "",
      connected: false,
    },
    {
      id: "tiktok",
      platform: "TikTok",
      username: "",
      connected: false,
    },
    {
      id: "x",
      platform: "X (Twitter)",
      username: "",
      connected: false,
    },
    {
      id: "threads",
      platform: "Threads",
      username: "",
      connected: false,
    },
  ]);

  const platformIcons: { [key: string]: React.ReactNode } = {
    spotify: <Icons.spotify className="h-5 w-5" />,
    youtube: <Youtube className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    tiktok: <Icons.tiktok className="h-5 w-5" />,
    x: <Icons.x className="h-5 w-5" />,
    threads: <Icons.threads className="h-5 w-5" />,
  };

  const handleConnect = (accountId: string) => {
    setAccounts(accounts.map(account => {
      if (account.id === accountId) {
        return {
          ...account,
          connected: true,
          username: `demo_${account.id}`,
          lastSync: new Date().toISOString(),
        };
      }
      return account;
    }));
  };

  const handleDisconnect = (accountId: string) => {
    setAccounts(accounts.map(account => {
      if (account.id === accountId) {
        return {
          ...account,
          connected: false,
          username: "",
          lastSync: undefined,
        };
      }
      return account;
    }));
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-6">Connected Accounts</h2>
        <div className="space-y-6">
          <div className="grid gap-6">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    {platformIcons[account.id]}
                  </div>
                  <div>
                    <h3 className="font-medium">{account.platform}</h3>
                    {account.connected && (
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-muted-foreground">
                          Connected as {account.username}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          Synced {new Date(account.lastSync!).toLocaleDateString()}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant={account.connected ? "outline" : "default"}
                  onClick={() =>
                    account.connected
                      ? handleDisconnect(account.id)
                      : handleConnect(account.id)
                  }
                >
                  {account.connected ? "Disconnect" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Data Sync Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Automatic Sync</h3>
              <p className="text-sm text-muted-foreground">
                Keep your data up to date automatically
              </p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Manual Sync</h3>
              <p className="text-sm text-muted-foreground">
                Update your data on demand
              </p>
            </div>
            <Button>Sync Now</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}