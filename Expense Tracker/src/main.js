import { LitElement, html, css } from 'lit';
import './components/ExpenseList.js';
import './components/AddExpense.js';
import './components/ExpenseSummary.js';
import './components/FilterExpenses.js';

class ExpenseTracker extends LitElement {
  static properties = {
    expenses: { type: Array },
    filteredExpenses: { type: Array },
    total: { type: Number },
    minAmount: { type: Number }
  };

  static styles = css`
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
  `;

  constructor() {
    super();
    this.expenses = [];
    this.filteredExpenses = [];
    this.total = 0;
    this.minAmount = 0;
  }

  addExpense(expense) {
    this.expenses = [...this.expenses, expense];
    this.filterExpenses(this.minAmount);
    this.calculateTotal();
  }

  filterExpenses(minAmount) {
    this.minAmount = minAmount;
    this.filteredExpenses = this.expenses.filter(expense => expense.amount >= minAmount);
  }

  calculateTotal() {
    this.total = this.filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  render() {
    return html`
      <div class="container">
        <h1>Expense Tracker</h1>
        <add-expense .onAddExpense=${this.addExpense.bind(this)}></add-expense>
        <filter-expenses .minAmount=${this.minAmount} .onFilterChange=${this.filterExpenses.bind(this)}></filter-expenses>
        <expense-list .expenses=${this.filteredExpenses}></expense-list>
        <expense-summary .total=${this.total}></expense-summary>
      </div>
    `;
  }
}

customElements.define('expense-tracker', ExpenseTracker);
