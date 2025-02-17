export default class Counter extends HTMLElement{
    //:host appllies to the counter-component custom element (in html)
    css = `
        :host {
            display:block;
            max-width:150px;
            background-color:white;
            border-radius: 4px;
            padding:16px;
            border: 1px solid #dddddd;
            user-select:none;
            margin: 0 auto;
        }
        .value {
            padding: 24px 0px;
            text-align:center;
            font-family:sans-serif;
            font-size: 48px;
        }
        .buttons {
            display: flex;
            gap: 16px;
        }
        .button {
            flex-grow:1;
            font-size: 24px;
            padding: 16px 0px;
            background: #dddddd;
            color: #333333;
            cursor: pointer;
            outline: none;
            border: none;
            border-radius: 4px;
        }
        .button:active {
            background: #cccccc;
        }
    `
    template = () => `
        <div class="value">0</div>
        <div class="buttons">
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
        <style>${this.css.trim()}</style>
        ${this.template().trim()}`
    }
}