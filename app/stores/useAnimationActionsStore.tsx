import { create } from "zustand";

interface AnimationStore {
  activeNav: boolean;
  setActiveNav: (activeNav: boolean) => void;
}

export const useAnimationActionsStore = create<AnimationStore>((set) => ({
  activeNav: false,
  setActiveNav: (activeNav) => set({ activeNav }),
}));
