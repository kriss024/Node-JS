"use strict";
let newVariable;
let emptyVariable = null;
let myNumber = 3;                   // a number
let myString = "Hello, World!"      // a string
let myBoolean = true;               // a boolean
let a = 4 - 'hello';

console.log(newVariable);
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(newVariable); //prints undefined
console.log(emptyVariable); //prints null
myString = "-001.235";
myNumber = Number(myString);
console.log(myNumber);
myString =  String(myNumber);
console.log(myString);
console.log(a); // NaN

let x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

console.log(Math.min(0, 150, 30, 20, -8, -200));

let time = 21;
let greeting;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);

let numerator= 100, denominator = 0;

try {
    console.log(numerator/denominator);
}
catch(error) {
    console.log('Error message: ' + error);  
}
finally {
    console.log('Finally will execute every time');
}

let emptyArray = [];  // an array
let emptyObject = {}; // an object

let myArray = [1, 2, 3];
let theSameArray = new Array(1, 2, 3);
console.log(myArray[1]); // prints out 2
myArray[3] = "hello"
console.log(myArray);

let text = "Hello|World";
for(var ch of text.split("|"))
    console.log('('+ch+')');

let myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
myArray.unshift(0);
console.log(myArray);

myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++)
{
    console.log(i + ": " + myArray[i]);
}

// Traditional Function
function hello(val) {
    return "Hello " + val;
  }
  
// Arrow Function
let helloA = val => "Hello " + val;

console.log(hello("world"));
console.log(helloA("world"));


let myFun = (a, b) => a * b;

// using object literal
let person = {
    name: 'John',
    age: 30,
    greet: function() { 
        console.log('The name is' + ' ' + this.name); 
    },
    getAge: function() { 
        return this.age;
    }
};

person.greet();
person.surname = 'Doe';
person["age"] = 33;
let name = person.surname;
console.log(person.surname);
console.log(person.getAge());

// Get the keys of the object
let keys = Object.keys(person);
console.log('Object keys: '+ keys);

// constructor function
function Person (person_name, person_age, person_gender) {

    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,
 
    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
 }
 
 // creating objects
let person1 = new Person('John', 23, 'male');
// adding new property to person1
person1.age = 20;
let person2 = new Person('Sam', 25, 'female');

// adding a method to the constructor function
Person.prototype.greetHello = function() {
    console.log('hello' + ' ' +  this.name);
}

person1.greetHello(); // hello John
person2.greetHello(); // hello John
 
 // accessing properties
 console.log(person1.name);
 console.log(person2.name);

 let student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },

    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.getName);
student.changeName = 'Sarah';
console.log(student.getName);

student.greetHello = function() {
    console.log('hello' + ' ' +  this.firstName);
}

student.greetHello();

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  let myCar1 = new Car("Ford", 2014);
  let myCar2 = new Car("Audi", 2019);