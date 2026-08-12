export type Destination = "google" | "social" | "survey";

export const destinationLabels: Record<Destination, string> = {
  google: "Google Reviews",
  social: "Social media",
  survey: "Survey",
};

export type CartItem = {
  lineId: string;
  productId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  destination: Destination;
};
