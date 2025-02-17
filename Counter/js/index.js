import Counter from "./components/counter.js";

// there should be '- in the comonent name. It is mandatory
customElements.define('counter-component', Counter);

const myCounter = document.getElementById("my-counter");

setTimeout(()=>console.log(myCounter.value), 2000)