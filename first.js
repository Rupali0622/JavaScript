// Entered number is multiple of 5 or not
// let num=prompt("Enter a number = ");
// if (num%5==0){
//     console.log("Number is divisible by 5");
// }else{
//     console.log("Number is not divisible by 5");
// }

//student score grade

/*let marks= prompt("Enter the marks of student ");

if(marks>=80 && marks<=100){
    console.log("A");
}else if(marks>=70 && marks<=79){
    console.log("B");
}else if(marks>=60 && marks<=69){
    console.log("C");
}else if(marks>=50 && marks<=59){
    console.log("D");
}else if(marks>=0 && marks<=49){
    console.log("F");
}else{
    console.log("Invalid Input");
}*/

//For loop

/*let num=prompt("Enter any number(1-10)");

for (let i=1; i<=10; i++){

    let n=num*i;
    console.log(num,"*",i,"= ",n);

}*/

/*for-of loop used for string/array

let str="Rupali";

for(let i of str){
    console.log(i);
}*/

//for-in loop used for objects

let student={
    name:"Rupali",
    age:25,
    cgpa:8.5,
    isPass:true
};
for(let key in student){
    console.log("key = ",key,":",student[key]);
}