/*const student = {
    fullName: "aravind",
    marks: 95,
    printMarks: function() {
        console.log("marks = ", this.marks);
    },
};*/

/*const employee = {
    calcTax1(){
        console.log("tax is rate is 10 %");
    },

};

const karanArjun = {
    salary: 50000,
};
karanArjun.__proto__ = employee; */

//classes - it is a program code template creating objects.
//objects have some StaticRange(variavbles)& some behaviour(functions)inside it//
/* class MyClass{
    constr(){...}
    myMethod(){...}
}
let myObj = new MyClass();*/
/*class ToyotaCar{
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

}
let fortuner = new ToyotaCar(); */
//inheritance --> it is passing down properties & methods from parent class to child class
/* class Parent{
}
class Child extends Parent{
} --> method overriding*/

/*class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{

}
let obj = new Child();*/

/*class Person{
    eat() {
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    work(){
        console.log("solve problem build something");
    }
}

let aravindObj = new Engineer(); */

//super key --> it is used to call the constructor of its parent class to acces the parents properties and methods
/* super(args) -- call's parent constructor
super.parentmethod(args)*/
/*let DATA = "Secret infromation";
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;

    }
    viewData(){
        console.log("data=", DATA);
    }
}
    class Admin extends User{
        constructor(name,email){
            super(name, email);
        }
        editData(){
            DATA = "some new value";
    }
    }

let student1 = new User("shraddha", "abc@gmail.com");
let student2 = new User("sai", "sai@gmail.com");

let teacher1 = new User("dean","dean@gmail.com");
let admin1 =  new User("surya", "bhai@gmail.com"); */

/*let a=5;
let b=6;
console.log("a= ",a);
console.log("b= ",b);*/

//Error handling
/*try-catch
try{
    normal code
} catch(err){
    handling error
}*/

let a=5;
let b=6;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
try{
    console.log("a+c=",a+c);
}catch (err){
    console.log(err);
}
