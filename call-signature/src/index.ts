interface PriceCalculator {
    (price: number, tax: number): number;
    description: string;
}

const totalCost: PriceCalculator = (price, tax)=> {
    return price + tax;
}

totalCost.description = "Total Cost";

console.log(`${totalCost.description}: ${totalCost(5,2)}`);