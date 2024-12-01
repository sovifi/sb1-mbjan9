"use client";

import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { Music2 } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <Music2 className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">Streaming Hotspots</span>
      </Link>
      <AuthForm mode="signup" />
      <p className="mt-4 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}