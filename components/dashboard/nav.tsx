"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Settings,
  Music2,
  LogOut,
  MessageSquare,
  TrendingUp,
  Calendar,
  FolderOpen,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";

const routes = [
  {
    href: "/dashboard",
    label: "Analytics",
    icon: BarChart2,
  },
  {
    href: "/dashboard/campaigns",
    label: "Campaigns",
    icon: FolderOpen,
  },
  {
    href: "/dashboard/insights",
    label: "AI Insights",
    icon: TrendingUp,
  },
  {
    href: "/dashboard/chat",
    label: "AI Assistant",
    icon: MessageSquare,
  },
  {
    href: "/dashboard/planning",
    label: "Planning",
    icon: Calendar,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="flex h-screen flex-col border-r bg-card">
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Music2 className="h-5 w-5" />
          <span className="font-semibold text-sm">Hotspots</span>
        </Link>
      </div>
      <div className="flex-1 space-y-1 p-2">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn("w-full justify-start gap-2 px-2", {
              "bg-secondary": pathname === route.href,
            })}
            size="sm"
            asChild
          >
            <Link href={route.href}>
              <route.icon className="h-4 w-4" />
              <span className="text-sm">{route.label}</span>
            </Link>
          </Button>
        ))}
      </div>
      <div className="p-2 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 px-2"
          size="sm"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          <span className="text-sm">Logout</span>
        </Button>
      </div>
    </div>
  );
}