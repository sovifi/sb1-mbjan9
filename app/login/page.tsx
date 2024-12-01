"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { Music2 } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <Music2 className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">Streaming Hotspots</span>
      </Link>
      <AuthForm mode="login" />
      <p className="mt-4 text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}