"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Music2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Music2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Streaming Hotspots</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Turn Social Media Activity into Streaming Success
            </h1>
            <p className="text-xl text-muted-foreground">
              Understand what drives your streaming numbers and get AI-powered strategies
              to grow your audience and revenue.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/signup" className="gap-2">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">See Demo</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
              </div>
              <p className="text-muted-foreground">
                Our AI analyzes your social media and streaming data to identify what
                drives your success and provides actionable strategies.
              </p>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Platform Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Connect your social media and streaming accounts for comprehensive
                  analytics.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Strategic Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized recommendations for content, timing, and engagement.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}