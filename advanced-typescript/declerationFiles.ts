import { calculateTax, VERSION } from './utils.js'

console.log("Running version: " + VERSION);

const tax = calculateTax(100, "TN");

console.log(`Total Tax: ${tax}`);