/*let array=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
array.shift();
console.log(array);

array.splice(1,1,"Ola");
console.log(array);

array.push("Amazon");
console.log(array);


let marks=[85,94,89,92,85,99,67,84,93,92];

const marksabove90=marks.filter((val)=>{
    return val>90;
});
console.log(marksabove90);


let n=prompt("Enter a number");
let arrayy=[];
for(let i=1; i<=n; i++){
    arrayy[i-1]=i;
}
console.log(arrayy);

const sumofarray=arrayy.reduce((previous,current)=>{
    return previous+current;
});

console.log(sumofarray);


const productofarray=arrayy.reduce((previous,current)=>{
    return previous*current;
})

console.log(productofarray);*/

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+" from Apna Collge";


// let divs=document.querySelectorAll(".box");
// console.log(divs);
// console.log(divs[0]);
// divs[0].innerText="New Unique value 1";
// console.log(divs[1]);
// divs[1].innerText="New Unique value 2";
// console.log(divs[2]);
// divs[2].innerText="New Unique value 3";

//(1)
let btn=document.createElement("button");
btn.innerText="Click me!";
btn.style.backgroundColor="Red";
btn.style.color="White";

document.querySelector("body").prepend(btn);

//(2)
let p=document.querySelector("p");
let s=p.setAttribute("class","newpara");
console.log(s);

