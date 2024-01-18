/*function myFunction(msg){
    console.log(msg)
    console.log("My name is Rupali")
}


myFunction("I am Rupali");


//Arrow Function

const arrowsum=(a,b)=>{
    console.log("sum",a+b);
};

arrowsum(5,6);*/


//forEach loop(Higher order function/method)

let arr=[1,2,3,4,5];

arr.forEach((val,idx,arr)=>{ //val= each value of array
    console.log(val,idx,arr);
});
 

//return square of each value
//First way
let number=[2,4,6,8];

number.forEach((val)=>{
    console.log(val*val); //val**2
});
//second way

const calculatesqr=(num)=>{
    console.log(num*num);
};

arr.forEach(calculatesqr);

//map 

let array=[2,3,4,5];
let mapfun=array.map((val)=>{
    return val*2;
});

console.log(mapfun);

// filter

let ar=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let a=ar.filter((val)=>{
    return (val%2==0);
});

console.log(a);

//reduce

