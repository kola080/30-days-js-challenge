const personAccount = {
  firstName: "Kolawole",
  lastName: "Amosun",
  incomes: [{ incomes: 45000, description: "owoAjo" }],
  expenses: [{ expenses: 7000, description: "ball" }],
  totalIncome: function () {
    let balance = 0;
    this.incomes.forEach(function values(val) {
      // val.incomes
      balance = balance + val.incomes;
    });
    return balance;
  },
  totalExpense: function () {
    let expenses = 0;
    this.expenses.forEach(function value(val) {
      expenses = expenses + val.expenses;
    });
    return expenses;
  },
  accountInfo: function () {
    const firstName = this.firstName;
    const lastName = this.lastName;
    const balance = this.totalBalance();
    console.log(firstName, lastName, balance);
  },
  totalBalance: function () {
    let balance = this.totalIncome() - this.totalExpense() + this.balance;
    return balance;
  },
  addIncome: function (income, description) {
    this.incomes.push({ incomes: income, description: description });
  },
  addExpense: function (expense, description) {
    this.expenses.push({ expenses: expense, description: description });
  },
  addBalance: function (newBalance) {
    this.balance += newBalance;
  },
  balance: 0,
};

// console.log(personAccount);
console.log(personAccount.totalBalance());
