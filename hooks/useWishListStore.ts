import { IProductInput } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishListStore {
  wishList: IProductInput[];
  addToWishlist: (product: IProductInput) => void;
  removeFromWishlist: (productSlug: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productSlug: string) => boolean;
}

export const useWishListStore = create<WishListStore>()(
  persist(
    (set, get) => ({
      wishList: [],
      addToWishlist: (product) => {
        const exists = get().wishList.find(
          (item) => item.slug === product.slug
        );
        if (!exists) {
          set((state) => ({
            wishList: [...state.wishList, product],
          }));
        }
      },
      removeFromWishlist: (productSlug) =>
        set((state) => ({
          wishList: state.wishList.filter((item) => item.slug !== productSlug),
        })),
      clearWishlist: () => set({ wishList: [] }),
      isInWishlist: (productSlug) =>
        !!get().wishList.find((item) => item.slug === productSlug),
    }),
    {
      name: "wishlist-storage",
    }
  )
);
