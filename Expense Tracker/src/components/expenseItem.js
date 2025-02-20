import { LitElement, html, css } from 'lit';

class ExpenseItem extends LitElement {
  static properties = {
    expense: { type: Object }
  };

  static styles = css`
    .expense-item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
  `;

  render() {
    return html`
      <div class="expense-item">
        <span>${this.expense.description}</span>
        <span>${this.expense.amount}</span>
      </div>
    `;
  }
}

customElements.define('expense-item', ExpenseItem);
