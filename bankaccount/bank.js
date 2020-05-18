class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate / 100;
    }

    addInterest() {
        this.balance += this.balance * this.interestRate;
    }

    makeDeposit(amount) {
        this.balance += amount;
    }
}

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee) {
        super(balance, interestRate);
        this.fee = fee;
    }

    applyFee() {
        this.balance -= this.fee;
    }
}

const bankAccount = new BankAccount(100, 5);
const bankAccountWithFee = new BankAccountWithFee(100, 10, 10);

console.log(`balance is: $${bankAccount.balance}`); // 100
bankAccount.addInterest(); // balance = 100 + (100 * 0.05)
console.log(`balance is: $${bankAccount.balance}`); // 105
bankAccount.makeDeposit(200); // 105 + 200
console.log(`balance is: $${bankAccount.balance}`); // 305

console.log(`balance is: $${bankAccountWithFee.balance}`);
bankAccountWithFee.addInterest();
console.log(`balance is: $${bankAccountWithFee.balance}`);
bankAccountWithFee.applyFee();
console.log(`balance is: $${bankAccountWithFee.balance}`);
bankAccountWithFee.makeDeposit(300);
console.log(`balance is: $${bankAccountWithFee.balance}`);