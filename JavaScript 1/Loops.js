//(1) for loop

for(let i=1; i<=10; i++){
    console.log(i);
}

// (2) While loop
let a=1;
while(a<=10){
    console.log(a);
    a++
}

// (3) Do- while loop
let b=1;
do{
    console.log(b);
    b++;
}while(b<=10);

// (4) For in loop
let Akshu={
    name:"Akshu",
    age:24,
    qualification:"MCA",
    JobProfile:"Software Engineer"
};

for(let i in Akshu){
    console.log(i,":",Akshu[i]);
}

//(5) for of loop

let str="Rupali";
for(let i of str){
    console.log(i);
}