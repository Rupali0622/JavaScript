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
 //getAttribute
 /*let divid=document.querySelector("#div-id");
 console.log(divid);

 let ids=divid.getAttribute("id");
 console.log(ids);

 let divclass=document.querySelector(".div-class");
 console.log(divclass);

 let classs=divclass.getAttribute("class");
 console.log(classs);

 //setAttribute
 
let ids2=divid.setAttribute("id","First");

let class2=divclass.setAttribute("class","Second");


//(7)
// node.style

divid.style.backgroundColor="Green";
divclass.style.backgroundColor="indigo";*/


//(8) Insert Element
//1- create
let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
console.log(newBtn);

//2- add
//(a) start of node(inside)
let diiv=document.querySelector("div");
diiv.append(newBtn);

//(b) start of node(inside)
// diiv.prepend(newBtn);

//(c) before node (outside)
// diiv.before(newBtn);

//(d) After Node(outside)
// diiv.after(newBtn);

// appendchild() Create a new paragraph element, and append it to the end of the document body
const p = document.createElement("p");
p.innerText="I am a paragraph";
document.body.appendChild(p);

// removechild() 
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const garbage = parent.removeChild(child);
console.log(garbage);


