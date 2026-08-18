import Stripe from "stripe";

/**
 * Server-only Stripe client. STRIPE_SECRET_KEY must never be exposed to the
 * browser — it only ever gets read here, inside a Route Handler that runs
 * on the server.
 */
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "STRIPE_SECRET_KEY is missing. Add it to .env.local (development) or your host's environment variables (production)."
  );
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
