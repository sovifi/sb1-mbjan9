"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Icons } from "@/components/icons";
import { Instagram, Twitter } from "lucide-react";

interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlatformModal({ isOpen, onClose }: PlatformModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Platform</DialogTitle>
          <DialogDescription>
            Choose a platform to connect with your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <h3 className="text-sm font-medium mb-2">Streaming Platforms</h3>
          <Button variant="outline" className="justify-start gap-2">
            <Icons.spotify className="h-4 w-4" />
            Connect Spotify
          </Button>
          <Button variant="outline" className="justify-start gap-2">
            <Icons.youtube className="h-4 w-4" />
            Connect YouTube Music
          </Button>
          
          <h3 className="text-sm font-medium mb-2 mt-4">Social Media</h3>
          <Button variant="outline" className="justify-start gap-2">
            <Instagram className="h-4 w-4" />
            Connect Instagram
          </Button>
          <Button variant="outline" className="justify-start gap-2">
            <Icons.threads className="h-4 w-4" />
            Connect Threads
          </Button>
          <Button variant="outline" className="justify-start gap-2">
            <Icons.x className="h-4 w-4" />
            Connect X
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}