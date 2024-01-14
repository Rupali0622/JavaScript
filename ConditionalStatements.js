// (1) If Condition  (Entered number is multiple of 5)

let num=prompt("Enter a number = ");
if (num%5==0){
    console.log("Number is divisible by 5");
}

// (2) If-else (Entered number is even or odd)

let number=prompt("Enter the number");
if(number%2==0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

// (3) if else-if (student score grade)

let marks= prompt("Enter the marks of student ");

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
}
