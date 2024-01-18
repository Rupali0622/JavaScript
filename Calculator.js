("<------------------------------------------Calculator--------------------------------------------------->");
let number1=prompt("Number 1");
let number2=prompt("Number 2");
let choice=prompt("Enter your choice\n (a)Addition\n (b)Subtraction\n (c)Multiplication\n (c)Division");


function Addition(x,y) {
    s=x+y;
    return s;
}
function Subtraction(x,y) {
    s=x-y;
    return s;
}
function Multiplication(x,y) {
    s=x*y;
    return s;
}
function Division(x,y) {
    s=x/y;
    return s;
}

switch (choice) {
    case "a": console.log("Addition= ",Addition(number1,number2));
        break;
    case "b": console.log("Subtraction= ",Subtraction(number1,number2));
        break;
    case "c": console.log("Multiplication= ",Multiplication(number1,number2));
        break;
    case "d": console.log("Division= ",Division(number1,number2));
        break;

    default:console.log("Invalid number")
        break;
}