# Finora Bank 💳

Finora Bank is a simple banking website built with HTML, CSS, and JavaScript. It allows users to create a bank account with their name and an initial deposit, deposit money, withdraw money, and view their available balance.

This project was created to practise JavaScript constructor functions, prototypes, and Test-Driven Development (TDD).

## Features

* **Create an Account:** Enter your name and initial deposit.
* **View Balance:** See your current available balance.
* **Deposit Money:** Add money to your account.
* **Withdraw Money:** Remove money from your account.
* **Input Validation:** Prevent invalid deposits and withdrawals or withdrawals exceeding the available balance.
* **Success and Error Messages:** Receive feedback when performing transactions.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* GIT

## Project Structure

finora-bank/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js


## How to Use

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter your name and initial deposit.
5. Click **Create Account**.
6. Enter an amount in the deposit field to add money.
7. Enter an amount in the withdrawal field to withdraw money.
8. Check your available balance after each transaction.

## JavaScript Concepts Practised

### Constructor Functions

The `BankAccount()` constructor creates an account and stores the owner's name and balance.

### Prototypes

The `deposit()` and `withdraw()` methods are added to `BankAccount.prototype` to manage transactions.

### DOM Manipulation

JavaScript interacts with HTML elements to display the account owner's name, balance, and transaction messages.

### Event Listeners

Form submission events allow users to create accounts, deposit money, and withdraw money without refreshing the page.

### Test-Driven Development (TDD)

Pseudocode test cases document the expected behavior of the constructor, deposit and withdrawal methods, money formatting, and user interface.

## Example

| Action          | Amount | Available Balance |
| --------------- | -----: | ----------------: |
| Initial deposit | ₦5,000 |            ₦5,000 |
| Deposit         | ₦2,000 |            ₦7,000 |
| Withdrawal      | ₦1,000 |            ₦6,000 |

## Future Improvements

* Add transaction history.
* Add the ability to edit account details.
* Store account information so it remains available after refreshing the page.
* Add automated JavaScript tests.

## Disclaimer

Finora Bank is an educational project created for learning purposes. It is not a real banking service and should not be used to store or manage real money.

## Author

Created as a JavaScript learning project to practise constructors, prototypes, DOM manipulation, and TDD.












# TDD — Finora Bank

## Test Case 1: BankAccount Constructor

**Text 1:** "The `BankAccount()` constructor function takes in the owner's name and initial balance and stores them in the account."

**Code:**


BankAccount()


**Example:**


let account = new BankAccount("Bruno", 20000);


**Expected Output:**


account.owner;   // "Bruno"
account.balance; // 20000


<!-- Test Case 1 Passed -->

---

## Test Case 2: Deposit Method

**Text 2:** "The `BankAccount.prototype.deposit()` method adds the deposited amount to the account balance."

**Code:**


BankAccount.prototype.deposit()


**Example:**


let account = new BankAccount("Bruno", 20000);
account.deposit(500);


**Expected Output:**


account.balance; // 20500


<!-- Test Case 2 Passed -->

---

## Test Case 3: Withdrawal Method

**Text 3:** "The `BankAccount.prototype.withdraw()` method subtracts the withdrawal amount from the account balance, provided the amount is valid and the account has enough money."

**Code:**


BankAccount.prototype.withdraw()


**Example:**


let account = new BankAccount("Bruno", 20000);
account.withdraw(500);


**Expected Output:**


account.balance; // 19500


<!-- Test Case 3 Passed -->

---

## Test Case 4: Invalid Deposit

**Text 4:** "The deposit method rejects amounts that are zero, negative, or not valid numbers."

**Code:**


account.deposit(amount)


**Example:**


let account = new BankAccount("Bruno", 20000);
account.deposit(-500);


**Expected Output:**


false
account.balance; // 20000


<!-- Test Case 4 Passed -->

---

## Test Case 5: Invalid Withdrawal

**Text 5:** "The withdrawal method rejects amounts that are zero, negative, invalid, or greater than the available balance."

**Code:**


account.withdraw(amount)


**Example:**


let account = new BankAccount("Bruno", 20000);
account.withdraw(25000);


**Expected Output:**


false
account.balance; // 20000


<!-- Test Case 5 Passed -->

---

## Test Case 6: Format Money

**Text 6:** "The `formatMoney()` function adds the Nigerian Naira symbol before an amount and displays two decimal places."

**Code:**


formatMoney()


**Example:**


formatMoney(500);


**Expected Output:**


"₦500.00"


<!-- Test Case 6 Passed -->

---

## Test Case 7: Show Message

**Text 7:** "The `showMessage()` function displays a message on the webpage and assigns a CSS class to style it."

**Code:**


showMessage(text, type)


**Example:**


showMessage("Deposit successful!", "success");


**Expected Output:**

* The webpage displays `Deposit successful!`.
* The message element receives the `success` CSS class.

<!-- Test Case 7 Passed -->

---

## Test Case 8: Update Balance

**Text 8:** "The `updateBalance()` function updates the displayed account balance and account owner's name on the webpage."

**Code:**


updateBalance()


**Example:**


let account = new BankAccount("Bruno", 5000);
updateBalance();


**Expected Output:**

* The balance display shows `₦5000.00`.
* The account owner's name displays `Bruno`.

<!-- Test Case 8 Passed -->

---

## Test Case 9: Create Account

**Text 9:** "The create account form takes the user's name and initial deposit, creates a new bank account, and displays the account information."

**Code:**


new BankAccount(owner, initialDeposit)


**Example:**


let account = new BankAccount("Bruno", 5000);


**Expected Output:**

* The account stores the name `Bruno`.
* The initial balance is `5000`.
* The account section becomes visible on the webpage.

<!-- Test Case 9 Passed -->

---

## Test Case 10: Deposit Through the Form

**Text 10:** "The deposit form collects an amount, adds it to the account balance, updates the display, and clears the input after a successful deposit."

**Example:**

* Initial balance: ₦5000
* Deposit amount: ₦2000

**Expected Output:**

* New balance: ₦7000.00
* Success message appears.
* Deposit input becomes empty.

<!-- Test Case 10 Passed -->

---

## Test Case 11: Withdraw Through the Form

**Text 11:** "The withdrawal form collects an amount, subtracts it from the account balance when valid, updates the display, and clears the input after a successful withdrawal."

**Example:**

* Initial balance: ₦5000
* Withdrawal amount: ₦1000

**Expected Output:**

* New balance: ₦4000.00
* Success message appears.
* Withdrawal input becomes empty.

<!-- Test Case 11 Passed -->

---

## Test Case 12: Insufficient Funds

**Text 12:** "The withdrawal form prevents the user from withdrawing more money than the available balance and displays an error message."

**Example:**

* Initial balance: ₦5000
* Withdrawal amount: ₦6000

**Expected Output:**

* Balance remains ₦5000.
* An insufficient funds message appears.

<!-- Test Case 12 Passed -->
