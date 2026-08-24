import type { Product } from "@/types";

/**
 * PRICING NOTES
 *
 * 1. The old 5-Pack ($78.97) is gone. It sat one dollar under the Starter Bundle
 *    ($79.99) while delivering less, so it gave nobody a reason to move up the
 *    ladder. Everything it did, the Starter Kit does better.
 * 2. Clean prices: $79.99 -> $79, $149.99 -> $149. Odd cents on a B2B page read
 *    as careless, not as a deal.
 * 3. Every struck-through price carries a stated reason. A discount without a
 *    why tells this buyer the "real" price was never real.
 * 4. Names are outcome-led with a plain descriptor underneath, so the page isn't
 *    a spec sheet that's trivial to price-compare against a generic listing.
 */

export const DISCOUNT_REASON = "Direct price - no reseller markup";

export const products: Product[] = [
  {
    id: "counter-card",
    name: "The Counter Card",
    subtitle: "1 custom NFC review card",
    description:
      "One card with your logo on it. Keep it by the register or in a tech's pocket. The cheapest way to find out whether your customers tap.",
    price: 19.99,
    compareAt: 27.99,
    unit: "card",
    destinations: ["google", "social", "survey"],
    defaultDestination: "google",
    image: "/products/counter-card.png",
  },
  {
    id: "counter-card-four",
    name: "The Counter Card, 4-Pack",
    subtitle: "4 custom NFC review cards",
    badge: "4 for the price of 3",
    description:
      "Four of the same card. One by the register, one at the back, one in a pocket, one spare for when a staff member walks off with the first three.",
    price: 59.97,
    compareAt: 79.96,
    discountReason: "Four cards, three-card price",
    unit: "4-pack",
    destinations: ["google", "social", "survey"],
    defaultDestination: "google",
    image: "/products/counter-card-four.png",
  },
  {
    id: "front-desk-plate",
    name: "The Front Desk Plate",
    subtitle: "1 custom NFC counter plate",
    description:
      "Sits flat on the counter or front desk and stays there. Nobody has to remember to bring it out.",
    price: 35,
    compareAt: 49,
    unit: "plate",
    destinations: ["google", "social", "survey"],
    defaultDestination: "google",
    image: "/products/front-desk-plate.png",
  },
  {
    id: "tabletop-asker",
    name: "The Tabletop Asker",
    subtitle: "1 NFC display with stand",
    description:
      "Stands up on a table where people are already looking. Best for restaurants, waiting rooms, and anywhere the customer sits down.",
    price: 39.99,
    compareAt: 54.99,
    unit: "display",
    destinations: ["google", "social", "survey"],
    defaultDestination: "google",
    image: "/products/tabletop-asker.png",
  },
];

export const bundles: Product[] = [
  {
    id: "starter-kit",
    name: "The Starter Kit",
    subtitle: "3 cards + 1 counter plate",
    badge: "Covers one counter",
    description:
      "Covers a single point of sale. One plate that lives on the counter, plus three cards for staff to hand over.",
    includes: ["3 custom NFC cards", "1 NFC counter plate"],
    price: 79,
    compareAt: 94.97,
    unit: "bundle",
    destinations: ["google", "social", "survey"],
    defaultDestination: "google",
    image: "/products/starter-kit.png",
  },
  {
    id: "full-floor",
    name: "The Full Floor System",
    subtitle: "4 cards + 1 counter plate + 1 tabletop display",
    badge: "Most businesses start here",
    description:
      "Covers every place the window opens: the counter, the tables, and whoever is handing the customer their check or their keys.",
    includes: [
      "4 custom NFC cards",
      "1 NFC counter plate",
      "1 tabletop display with stand",
    ],
    price: 129,
    compareAt: 154.95,
    unit: "bundle",
    destinations: ["google", "social", "survey"],
    defaultDestination: "google",
    image: "/products/full-floor.png",
  },
];

export const allProducts: Product[] = [...products, ...bundles];
