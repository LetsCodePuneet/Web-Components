export default class Counter extends HTMLElement{
    constructor(){
        // if we define a constructor its important to call the super constructor
        super();
        //this will be allowing user to upload elements in the shadow dom
        this.attachShadow({ mode: "open"});
        this.render();
    }

    // this will be updating the DOM with most recent data
    render(){
        this.shadowRoot.innerHTML = "<p>Hello!</p>"
    }
}