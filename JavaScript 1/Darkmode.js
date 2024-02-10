let btn=document.querySelector("button");

let body=document.querySelector("body");

let currmode="light";

btn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("black");
        body.classList.remove("white");
    }else{
        currmode="light";
        body.classList.add("white");
        body.classList.remove("black");
    }
    console.log(currmode);
});

