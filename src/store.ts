import { create } from "zustand";

interface ViewMasterStore {
  calibrationReelColors: string[];
  calibrationReelNumbers: string[];
  is3DReel: boolean;
  setIs3DReel: (is3DReel: boolean) => void;
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
  is3DReel: false,
  images: [],

  setImages: (images: string[]) => {
    set(() => ({ images: images }));
  },
  setIs3DReel: (is3DReel: boolean) => {
    set(() => ({ is3DReel: is3DReel }));
  },
}));
