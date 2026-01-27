abstract class Payment {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    log(): void {
        console.log("Processing Payment...");
    }

    abstract process(): void;
}

class CreditCard extends Payment {
    constructor(amount: number) {
        super(amount);
    }

    process(): void {
        console.log("Processing Credit Card...");
    }
}

class PayPal extends Payment {
    constructor(amount: number) {
        super(amount);
    }

    process(): void {
        console.log("Processing PayPal...");
    }
}

const pay1 = new CreditCard(1000);
pay1.log();
pay1.process()

