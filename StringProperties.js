//1=Create String 
let str ="RupaliChauhan";
console.log(str);

//2=String length
console.log(str.length);

//3=String indices to print individual character
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

// 4=Template Literals

let student={
    name:"Rupali",
    city:"Muzaffarnagar"
};
console.log("My name is ",student.name,"from ",student.city);
console.log(`My name is ${student.name} from ${student.city}`);

//5=Escape Characters

console.log("Rupali\nChauhan");
console.log("Rupali\tChauhan");

//6=String Methods in JS
//These are built-in functions to manipulate a String.

//(1) str.toUpperCase() [original string is not changed because stings are immutable in JS new string is created]
let str1="rupali";
console.log(str1.toUpperCase());

//(2) str.toLowerCase() [original string is not changed new string is created]
let str2="RUPALI";
console.log(str2.toLowerCase());

//(3) str.trim() [original string is not changed new string is created], Remove Whitespaces
let str3="     Rupali Chauhan      ";
console.log(str3.trim());

