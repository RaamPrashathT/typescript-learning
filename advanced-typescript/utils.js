export function calculateTax (amount, state) {
    if (state === "TN") return amount * 0.08;
    if (state === "UP") return amount * 0.1;

    return amount * 0.09;
}

export const VERSION = "1.0.2"