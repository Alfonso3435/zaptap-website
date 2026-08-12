export type ProductCategory = "card" | "plate" | "display" | "bundle";

export type Product = {
  id: string;
  category: ProductCategory;
  name: string;
  tagline: string;
  price: number;
  compareAtPrice?: number;
  unitLabel: string;
  image: string | null;
  badge?: string;
  includes?: string[];
};

export const products: Product[] = [
  {
    id: "card-individual",
    category: "card",
    name: "Individual NFC Card",
    tagline: "1 NFC card custom-branded with your logo",
    price: 19.99,
    compareAtPrice: 27.99,
    unitLabel: "card",
    image: null,
  },
  {
    id: "card-pack5",
    category: "card",
    name: "5-Pack NFC Cards",
    tagline: "5 custom-branded cards, great for your whole team",
    price: 78.97,
    compareAtPrice: 99.95,
    unitLabel: "5-pack",
    image: null,
    badge: "Most popular",
  },
  {
    id: "counter-plate",
    category: "plate",
    name: "NFC Counter Plate",
    tagline: "Custom-branded NFC plate for the counter or front desk",
    price: 35,
    compareAtPrice: 49,
    unitLabel: "plate",
    image: null,
  },
  {
    id: "tap-display",
    category: "display",
    name: "Tap Display with Stand",
    tagline: "NFC display with a tabletop stand included, ready to set out",
    price: 39.99,
    compareAtPrice: 54.99,
    unitLabel: "display",
    image: null,
  },
];

export const bundles: Product[] = [
  {
    id: "bundle-starter",
    category: "bundle",
    name: "ZapTap Starter Bundle",
    tagline: "3 NFC cards + 1 counter plate",
    price: 79.99,
    compareAtPrice: 94.97,
    unitLabel: "bundle",
    image: null,
    badge: "Great for getting started",
    includes: ["3 custom-branded NFC cards", "1 NFC counter plate"],
  },
  {
    id: "bundle-restaurant",
    category: "bundle",
    name: "Restaurant Bundle",
    tagline: "5 cards + 1 counter plate + 1 tap display with stand",
    price: 149.99,
    compareAtPrice: 174.94,
    unitLabel: "bundle",
    image: null,
    badge: "Covers your whole location",
    includes: [
      "5 custom-branded NFC cards",
      "1 NFC counter plate",
      "1 Tap display with stand",
    ],
  },
];

export const allCatalogItems = [...products, ...bundles];

export function findProductById(id: string): Product | undefined {
  return allCatalogItems.find((p) => p.id === id);
}
