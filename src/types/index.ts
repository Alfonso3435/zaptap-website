export type Destination = "google" | "social" | "survey";

export const DESTINATION_LABELS: Record<Destination, string> = {
  google: "Google reviews",
  social: "Social media",
  survey: "Internal feedback form",
};

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  compareAt?: number;
  /** Overrides DISCOUNT_REASON for this product only. */
  discountReason?: string;
  unit: string;
  badge?: string;
  includes?: string[];
  image?: string;
  destinations: Destination[];
  defaultDestination: Destination;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  destination: Destination;
}
