let marks=[96,87,86,95,44];

console.log(marks);

// array indices
console.log(marks[0]);
console.log(marks[2]);

marks[4]=97;
console.log(marks);

//looping in array
//for loop
let name=["Rupali","Shaily","Rohit","Shivam","shivani","viraj"];
let res=[85,97,44,37,76,60];

for(let i=0; i<name.length; i++){
    console.log(name[i]);
}
//for of loop
for(let i of res){
    console.log(i);
}

//practice question find average number
let result=[85,97,44,37,76,60];
let sum=0;
for (let i of result){
    sum=sum+i;
}
let average =sum/result.length;
console.log("sum = ",average);

//practice question
let price=[250,645,300,900,50];

for(let i=0; i<price.length;i++){
    price[i]=price[i]-0.1*price[i];
    console.log(price[i]); 
}
console.log(price);