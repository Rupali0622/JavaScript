console.dir(window.document);
console.log(document);
console.dir(document);

console.dir(document.body);
console.log(document.body);

//DOM Manipulation

//(1) Selecting with Id

let myid=document.getElementById("div");
console.dir(myid);
console.log(myid)

//(2) Selecting with class

let myclass=document.getElementsByClassName("span");
console.dir(myclass);
console.log(myclass);

let one=document.getElementsByClassName("one");
console.log(one);
console.dir(one);

//(3) selecting with tag
let links=document.getElementsByTagName("a");
console.dir(links);

// (4) Query Selector

//1 
let id=document.querySelector("#div");
console.dir(id);
console.log(id);

//2
let id2=document.querySelectorAll("h1")
console.dir(id2);
console.log(id2);


//(5) Properties

let div=document.querySelector("div");
console.log(div);

console.log(div.tagName);
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.textContent);

//(6) Attribute


