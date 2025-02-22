import { LitElement, html, css } from 'lit';

class FilterExpenses extends LitElement {
  static properties = {
    minAmount: { type: Number },
    onFilterChange: { type: Function }
  };

  static styles = css`
    .filter-expenses {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .filter-expenses input {
      margin-left: 10px;
      padding: 5px;
      font-size: 16px;
    }
  `;

  constructor() {
    super();
    this.minAmount = 0;
  }

  handleInputChange(e) {
    const value = parseFloat(e.target.value);
    this.minAmount = isNaN(value) ? 0 : value;
    this.onFilterChange(this.minAmount);
  }

  render() {
    return html`
      <div class="filter-expenses">
        <label for="minAmount">Filter by Minimum Amount: </label>
        <input type="number" id="minAmount" .value=${this.minAmount} @input=${this.handleInputChange}>
      </div>
    `;
  }
}

customElements.define('filter-expenses', FilterExpenses);
