import { create } from "zustand";

interface ViewMasterStore {
  images: string[];
  setImages: (images: string[]) => void;
}

export const useViewMasterStore = create<ViewMasterStore>((set) => ({
  images: [],

  setImages: (images: string[]) => {
    set(() => ({ images: images }));
  },
}));
