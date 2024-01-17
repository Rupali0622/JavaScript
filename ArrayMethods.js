//push() : add to end (Change original array)

let Fruits=["Mango","Orange","Papaya","Banana"];

Fruits.push("Apple");
console.log(Fruits);
Fruits.push("Grapes","Watermelon");
console.log(Fruits);


// pop() : Delete from end and return deleted item (Change in original array)

let color=["Blue","Yellow","Red","Orange"];
console.log(color);
let deletedItem=color.pop();
console.log(color);
console.log(deletedItem);

// toString() : change array to string (no change in original array)

console.log(Fruits.toString());

// concat() : join multiple arrays and returns result
let Vegetables=["ladyfinger","chilli","brinjal"];
let combine=Fruits.concat(color,Vegetables); // concat multiple arrays
console.log(combine);


// unshift() : add to start  (equivalent to push) // change in original array

Fruits.unshift("Guava");
console.log(Fruits);

// shift() : delete from start and return(change in original array)
let val=Fruits.shift();
console.log(val);
console.log(Fruits);

// slice() : returns a piece of array (no change in original array)
// slice(startidx,endidx)
let drinks=["colddrink","tea","Coffee","coldcoffee"];
console.log(drinks.slice(1,3));
console.log(drinks.slice()); // copy of array

// splice() : change original array(add, remove, replace)
//splice(startidx,delcount,newEl1 )

let number=[1,2,3,4,5,6,7,8,9];
// number.splice(3,3,12,13,14);
console.log(number);

// add element
number.splice(2,0,101);
console.log(number);

//Delete Element
number.splice(3,1);
console.log(number);

//Replace element
number.splice(3,1,101);
console.log(number);

// splice act as slice
number.splice(4);
console.log(number);