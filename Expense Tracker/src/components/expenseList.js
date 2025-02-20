import { LitElement, html, css } from 'lit';
import './ExpenseItem.js';

class ExpenseList extends LitElement {
  static properties = {
    expenses: { type: Array }
  };

  static styles = css`
    .expense-list {
      margin: 20px 0;
    }
  `;

  render() {
    return html`
      <div class="expense-list">
        ${this.expenses.map(expense => html`<expense-item .expense=${expense}></expense-item>`)}
      </div>
    `;
  }
}

customElements.define('expense-list', ExpenseList);
