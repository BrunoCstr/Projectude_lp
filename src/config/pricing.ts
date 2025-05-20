// src/config/pricing.ts

// --- Pricing raw values ---
export const prices = {
  monthly: 3.9,
  annually: 39.9,
  biannually: 69.9,
};

// --- Calculate Discounts ---
const monthlyCostAnnual = prices.monthly * 12;
const annualDiscountAmount = monthlyCostAnnual - prices.annually;
export const annualDiscountPercent = Math.round(
  (annualDiscountAmount / monthlyCostAnnual) * 100
);

const monthlyCostBiannual = prices.monthly * 24;
const biannualDiscountAmount = monthlyCostBiannual - prices.biannually;
export const biannualDiscountPercent = Math.round(
  (biannualDiscountAmount / monthlyCostBiannual) * 100
);
