export default class Counter extends HTMLElement{
    template = () => `
        <div class="value">0</div>
        <div class="button">
            <button type="button" class="button button--increment">+</button>
            <button type="button" class="button button--decrement">-</button>
        </div>
    `;
    
    constructor(){
        // if we define a constructor its important to call the super constructor
        super();
        //this will be allowing user to upload elements in the shadow dom
        this.attachShadow({ mode: "open"});
        this.render();
    }

    // this will be updating the DOM with most recent data
    render(){
        this.shadowRoot.innerHTML = `
        ${this.template().trim()}`
    }
}