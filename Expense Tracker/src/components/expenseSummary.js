import { LitElement, html, css } from 'lit';

class ExpenseSummary extends LitElement {
  static properties = {
    total: { type: Number }
  };

  static styles = css`
    .expense-summary {
      margin: 20px 0;
      font-size: 20px;
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <div class="expense-summary">
        Total: $${this.total.toFixed(2)}
      </div>
    `;
  }
}

customElements.define('expense-summary', ExpenseSummary);
