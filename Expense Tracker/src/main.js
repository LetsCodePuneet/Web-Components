import { LitElement, html, css } from 'lit';
import './components/expenseList.js';
import './components/addExpense.js';
import './components/expenseSummary.js';

class ExpenseTracker extends LitElement {
  static properties = {
    expenses: { type: Array },
    total: { type: Number }
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
    this.total = 0;
  }

  addExpense(expense) {
    this.expenses = [...this.expenses, expense];
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  render() {
    return html`
      <div class="container">
        <h1>Expense Tracker</h1>
        <add-expense .onAddExpense=${this.addExpense.bind(this)}></add-expense>
        <expense-list .expenses=${this.expenses}></expense-list>
        <expense-summary .total=${this.total}></expense-summary>
      </div>
    `;
  }
}

customElements.define('expense-tracker', ExpenseTracker);
