import { create } from "zustand";

interface ViewMasterStore {
  calibrationReelColors: string[];
  images: string[];
  setImages: (images: string[]) => void;
}

export const useViewMasterStore = create<ViewMasterStore>((set) => ({
  calibrationReelColors: [
    "red",
    "orange",
    "cyan",
    "green",
    "blue",
    "purple",
    "pink",
  ],
  calibrationReelNumbers: ["1", "4", "7", "3", "6", "2", "5"],
  images: [],

  setImages: (images: string[]) => {
    set(() => ({ images: images }));
  },
}));
