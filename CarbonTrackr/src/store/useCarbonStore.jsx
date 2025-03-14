import { create } from "zustand";

export const useCarbonStore = create((set) => ({
  history: [],
  addEntry: (entry) => set((state) => ({ history: [...state.history, entry] })),
}));