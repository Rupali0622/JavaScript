//Event Handling
let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("i was clicked");
//     console.log("Hello World!");
// };

let div=document.querySelector("div");

div.onmouseover=()=>{
    div.style.backgroundColor="yellow";
    div.style.color="black";
}

//Event Object
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx,evt.clientY);
// };

// Event Listeners
//(1) node.addEventListener(event,callback)
const handler=()=>{
    console.log("I was Clicked- handler1");
}
btn1.addEventListener("click", handler);
btn1.addEventListener("click", ()=>{
    console.log("I was Clicked- handler2");
});
btn1.addEventListener("click", ()=>{
    console.log("I was Clicked- handler3");
});
btn1.addEventListener("click",(event)=>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
});

//(2) node.removeEventListener(event,callback)
btn1.removeEventListener("click", handler);
