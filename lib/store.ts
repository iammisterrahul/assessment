// lib/useToastStore.ts
import { create } from "zustand";

interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
}

interface ToastStore {
  toasts: ToastProps[];
  showToast: (toast: ToastProps) => void;
  removeToast: (index: number) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  showToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),
  removeToast: (index) =>
    set((state) => {
      const newToasts = [...state.toasts];
      newToasts.splice(index, 1);
      return { toasts: newToasts };
    }),
}));
