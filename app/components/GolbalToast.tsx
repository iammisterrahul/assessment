// components/GlobalToaster.tsx
"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useToastStore } from "@/lib/store";
import { Toaster } from "@/components/ui/sonner";

export function GlobalToaster() {
  const { toasts, removeToast } = useToastStore();

  useEffect(() => {
    if (toasts.length > 0) {
      const index = 0;
      const current = toasts[index];
      toast(current.title || "", {
        description: current.description,
      });

      removeToast(index);
    }
  }, [toasts, toast, removeToast]);

  return <Toaster />;
}
