import express from "express";
import { calculateCarbon } from "../controllers/carbonController.mjs";
const router = express.Router();
router.post("/calculate", calculateCarbon);
export default router;

// Frontend - store/useCarbonStore.js
import { create } from "zustand";
export const useCarbonStore = create((set) => ({
  history: [],
  addEntry: (entry) => set((state) => ({ history: [...state.history, entry] })),
}));
