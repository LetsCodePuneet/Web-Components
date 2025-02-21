import { LitElement, html, css } from 'lit';

class AddExpense extends LitElement {
  static properties = {
    onAddExpense: { type: Function }
  };

  static styles = css`
    .add-expense {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
    .add-expense input {
      margin-bottom: 10px;
      padding: 10px;
      font-size: 16px;
    }
    .add-expense button {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.description = '';
    this.amount = '';
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  handleSubmit() {
    if (this.description && this.amount) {
      this.onAddExpense({ description: this.description, amount: parseFloat(this.amount) });
      this.description = '';
      this.amount = '';
    }
  }

  render() {
    return html`
      <div class="add-expense">
        <input type="text" name="description" placeholder="Description" .value=${this.description} @input=${this.handleInputChange}>
        <input type="number" name="amount" placeholder="Amount" .value=${this.amount} @input=${this.handleInputChange}>
        <button @click=${this.handleSubmit}>Add Expense</button>
      </div>
    `;
  }
}

customElements.define('add-expense', AddExpense);
