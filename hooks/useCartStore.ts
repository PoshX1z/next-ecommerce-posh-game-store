import { IProductInput } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends IProductInput {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: IProductInput) => void;
  removeFromCart: (productSlug: string) => void;
  clearCart: () => void;
  increaseQuantity: (productSlug: string) => void;
  decreaseQuantity: (productSlug: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find(
            (item) => item.slug === product.slug
          );
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.slug === product.slug
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        }),
      removeFromCart: (productSlug) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.slug !== productSlug),
        })),
      clearCart: () => set({ cart: [] }),
      increaseQuantity: (productSlug) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.slug === productSlug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseQuantity: (productSlug) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.slug === productSlug
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);
