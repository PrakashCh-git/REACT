
import box from "./2app.js";
import circle from "./2test.js";
let h1 = React.createElement("h1",null,"This is Prakash");
let parent = React.createElement("div",null,[box(),circle(),h1]);


let root = ReactDOM.createRoot(document.querySelector("#container"));
root.render(parent);
