"use client";

import { useState, useEffect } from "react";

interface Goal {
  type: string;
  target: number;
  metric: string;
  deadline: Date;
  progress: number;
}

export function useGoal() {
  const [currentGoal, setCurrentGoal] = useState<Goal | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the user's current goal
    setTimeout(() => {
      setCurrentGoal({
        type: "Increase Spotify Streams",
        target: 10000,
        metric: "monthly streams",
        deadline: new Date("2024-04-30"),
        progress: 3500,
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    currentGoal,
    isLoading,
    setCurrentGoal,
  };
}