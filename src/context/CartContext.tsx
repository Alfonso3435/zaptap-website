"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem, Destination, Product } from "@/types";
import { fbTrack } from "@/lib/fpixel";

const STORAGE_KEY = "zaptap-cart-v2";

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  add: (product: Product, quantity: number, destination: Destination) => void;
  setQuantity: (productId: string, destination: Destination, quantity: number) => void;
  remove: (productId: string, destination: Destination) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      // Corrupted or unavailable storage: start with an empty cart.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage full or blocked. The cart still works for this session.
    }
  }, [items, hydrated]);

  const add = useCallback(
    (product: Product, quantity: number, destination: Destination) => {
      setItems((prev) => {
        const i = prev.findIndex(
          (it) => it.productId === product.id && it.destination === destination
        );
        if (i > -1) {
          const next = [...prev];
          next[i] = { ...next[i], quantity: next[i].quantity + quantity };
          return next;
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity,
            destination,
          },
        ];
      });
      setIsOpen(true);

      // Meta Pixel: AddToCart
      fbTrack("AddToCart", {
        content_ids: [product.id],
        content_type: "product",
        value: product.price * quantity,
        currency: "USD",
      });
    },
    []
  );

  const setQuantity = useCallback(
    (productId: string, destination: Destination, quantity: number) => {
      setItems((prev) =>
        quantity <= 0
          ? prev.filter(
              (it) => !(it.productId === productId && it.destination === destination)
            )
          : prev.map((it) =>
              it.productId === productId && it.destination === destination
                ? { ...it, quantity }
                : it
            )
      );
    },
    []
  );

  const remove = useCallback((productId: string, destination: Destination) => {
    setItems((prev) =>
      prev.filter((it) => !(it.productId === productId && it.destination === destination))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items]);
  const total = useMemo(
    () => items.reduce((n, i) => n + i.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, count, total, isOpen, add, setQuantity, remove, clear, openCart, closeCart }),
    [items, count, total, isOpen, add, setQuantity, remove, clear, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
