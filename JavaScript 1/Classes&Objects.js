//Objects in JS
//object1
const employee={
    caltax(){
        console.log("Tax is 10%");
    }
};

//object2
const rupali={
    fullName:"Rupali Chauhan",
    salary:60000,
    caltax(){
        console.log("Tax is 20%");
    }
};

//set prototype 
rupali.__proto__=employee;

//Classes in JS
/*class Pen{
    setColor(color){
        this.color=color;
        console.log("color=",this.color);
    }
    setType(type){
        this.type=type;
        console.log("type=",this.type);
    }
    setBrand(brand){
        this.brand=brand;
        console.log("brand=",this.brand);
    }
}

let pilot=new Pen();
pilot.setColor("Blue");
pilot.setType("Gel");
pilot.setBrand("pilot");
let parker=new Pen();
parker.setColor("Black");
parker.setType("Ball");
parker.setBrand("parker");*/


//Constructor 
class Human{
    constructor(name,Class,age){
        this.name=name;
        this.Class=Class;
        this.age=age;
    }

}

let Rupali=new Human("Rupali","MCA",25);

//Inheritance
class Person{
    constructor(){
        this.species="Homo Species";
    }
    eat(){
    }
}
class Engineer extends Person{
    work(){
        console.log("Build Something");
    }
}
let obj=new Engineer();



//Super Keyword
class School{
    constructor(){
        console.log("Enter parent constructor");  //(2)
        this.species="Homo Species";
    }
    study(){
        console.log("Study");
    }
}
class Student extends School{
    constructor(hello){
        console.log("Enter child Constructor");  //(1)
        super(); //invoke parent class constructor
        this.hello=hello;
        console.log("Exit child constructor");  //(3)
    }
    work(){
        console.log("Build Something");
    }
}

let obj2=new Student("hello");

//super keyword another use

class Car{
    constructor(name){
        this.name=name;
        console.log("My car is= ",this.name);
    }
}

class Maruti extends Car{
    constructor(name){
        super(name); // pass argument value in parent class constructor
    }
}

let Carobj=new Maruti("Fortuner");



//Practice Question

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data");
    }
}

let student =new User("Rupali","abcd@gmail.com");
let teacher=new User("Hema","efgh@gmail.com");



//Practice Question
let DATA="Secret Data";
class User1{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(DATA);
    }
}
class Admin extends User1{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="New Information";
    }
}
let student1 =new User1("Rupali","abcd@gmail.com");
let teacher2=new User1("Hema","efgh@gmail.com");

let admin1=new Admin("admin","admin@gmail.com");
