import { create } from "zustand";

export const useViewMasterStore = create((set) => ({
  images: [],

  setImages: (images: string[]) => {
    set(() => ({ images: images }));
  },
}));
