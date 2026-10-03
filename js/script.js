
"use strict";

// ================================
// 1. BUSINESS LOGIC
// ================================

function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;
}


// Deposit method
BankAccount.prototype.deposit = function (amount) {
    amount = Number(amount);

    if (amount <= 0 || !Number.isFinite(amount)) {
        return false;
    }

    this.balance = this.balance + amount

    return true;
};


// Withdrawal method
BankAccount.prototype.withdraw = function (amount) {
    amount = Number(amount);

    if (amount <= 0 || !Number.isFinite(amount)) {
        return false;
    }

    if (amount > this.balance) {
        return false;
    }

    this.balance = this.balance - amount

    return true;
};


// ================================
// 2. USER INTERFACE LOGIC
// ================================

let account = null;

const createForm = document.getElementById("createForm");
const createSection = document.getElementById("createSection");
const accountSection = document.getElementById("accountSection");

const ownerInput = document.getElementById("owner");
const initialDepositInput = document.getElementById("initialDeposit");

const depositForm = document.getElementById("depositForm");
const depositAmountInput = document.getElementById("depositAmount");

const withdrawForm = document.getElementById("withdrawForm");
const withdrawAmountInput = document.getElementById("withdrawAmount");

const balanceDisplay = document.getElementById("balance");
const accountOwner = document.getElementById("accountOwner");
const message = document.getElementById("message");


// Format balance as Nigerian Naira
function formatMoney(amount) {
    return "₦" + amount.toFixed(2);
}
// Display messages
function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}


// Update the displayed account information
function updateBalance() {
    balanceDisplay.textContent = formatMoney(account.balance);
    accountOwner.textContent = account.owner;
}


// ================================
// 3. CREATE ACCOUNT
// ================================

createForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (account !== null) {
        showMessage("An account already exists.", "error");
        return;
    }

    const owner = ownerInput.value.trim();
    const initialDeposit = Number(initialDepositInput.value);

    if (owner === "") {
        showMessage("Please enter your name.", "error");
        return;
    }

    

    account = new BankAccount(owner, initialDeposit);

    createSection.hidden = true;
    accountSection.hidden = false;

    updateBalance();

    showMessage(
        "Your Finora account has been created successfully!",
        "success"
    );
});


// ================================
// 4. DEPOSIT MONEY
// ================================

depositForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = Number(depositAmountInput.value);

    if (!account.deposit(amount)) {
        showMessage(
            "Enter a valid deposit amount greater than zero.",
            "error"
        );
        return;
    }

    updateBalance();
    depositForm.reset();

    showMessage(
        formatMoney(amount) + " deposited successfully!",
        "success"
    );
});


// ================================
// 5. WITHDRAW MONEY
// ================================

withdrawForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = Number(withdrawAmountInput.value);

    if (amount > account.balance) {
        showMessage(
            "Insufficient funds. Your balance is too low.",
            "error"
        );
        return;
    }

    if (!account.withdraw(amount)) {
        showMessage(
            "Enter a valid withdrawal amount greater than zero.",
            "error"
        );
        return;
    }

    updateBalance();
    withdrawForm.reset();

    showMessage(
        formatMoney(amount) + " withdrawn successfully!",
        "success"
    );
});