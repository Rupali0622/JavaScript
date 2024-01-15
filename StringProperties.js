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

//(4) str.slice(start,end) end value is not included(non-inclusive)
let str4="012345678";
console.log(str4.slice(1,6));
console.log(str4.slice(3)); //output=345678

//(5) str1.concat(str2)
let str5="Rupali";
let str6="Chauhan";
let res=str5.concat(str6); // let res=str5+str6;  // let res="My name is"+ str5 +str6;
console.log(res);

//(6) str.replace(searchVal,newVal)
let a="Hello";
console.log(a.replace("H","Y"));
let b="Helololo"; //Replace all matching values
console.log(b.replaceAll("lo","p"));

//(7) str.charAt(idx)
let c="Rupali";
console.log(c.charAt(0));