/* alert('Hello World');        Avoid using alert. Instead use Console */

/* console.log('Hello World');
console.error('This is an error');
console.warn('this is a warning'); */

/* let age = 30;
age=31;
console.log(age);

const name = 'John';
const age = 30;

const bool = true;
const rate = 4.5;
const x = null;
const y = undefined;
//OR
// let z; <-also undefined


// console.log(`My name is ${name} and I am ${age} years old`);

//Performing functions on Strings
const s = 'Hello World!'
console.log(s.split(''));
s.substring()
s.toUpperCase()
s.toLowerCase()

*/

//Working with Arrays

const num = new Array(1,2,3,4,5); //old method of declaring arrays

const fruits = ['apples','oranges','watermelon','grapes'];
console.log(fruits);
fruits[4]='bananas';
console.log(fruits);

fruits.push('pears');   //Adds values at the end
console.log(fruits);

fruits.unshift('mangoes');  //Adds values at the beginning
console.log(fruits);
//to pop out last value use method pop() -> no arguments
//to chcek if something is an array -> Array.isArray(arr_name);

// OBJECT LITERALS

/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '221b Bakers St',
        city: 'London',
        state: 'UK'
    }
}
//object destructuring to get values out use syntax:
const {firstName, lastName} = person;
//for embedded objects use syntax:
const {address: {city}} = person;
console.log(city);
//to add properties:
person.email = 'johndoe@gmail.com';
console.log(person);
*/

//ARRAYS OF OBJECTS:

const todos = [
    {
        id: 1,
        text: 'Take out the Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Empty Fridge',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Wash Dishes',
        isCompleted: true
    }
];
console.log(todos[0].text);

//to convert array of objects to json

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For Loops

for(let i = 0;i<5;i++)
{
    console.log(`For loop number : ${i+1}`);
}

//While Loops

let i = 0;
while(i<5)
{
    console.log(`While Loop number : ${i+1}`);
    i++;
}

//to loop through arrays
//method1
for(let i =0;i<todos.length;i++)
{
     console.log(todos[i].isCompleted);
}
//method2
for(let todo of todos)
{
    console.log(todo.id);
}
//method3 - high order array methods
//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted===true;
});
console.log(todoCompleted);


//CONDITIONALS

//if statement
const x = 4;
if(x===10)
{
    console.log(`x is 10`);
}

const color = x>9 ? 'red' : 'blue';     //Ternanry operator

//switch case
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

//FUNCTIONS

/* function addNums(num1=1, num2=1) {
    return (num1+num2);
}

console.log(addNums(5,5)); */

//Arrow Function

const addNums = (num1=1, num2=1) => {
    return (num1+num2);
}

console.log(addNums(50,5));


//OOP in JavaScript

//constructor function

/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName=lastName;
    this.dob= new Date(dob);        //create date object

    //we can add methods to function object
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    } 
}
//to convert getBirthYear and getFullName to prototype i.e. won't be present in every object
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
//instantiate object

const person1 = new Person('John','Doe','2-22-1965');
console.log(person1);

console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

//CLASS

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName=lastName;
        this.dob= new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Pratyush','Agarwal','2-22-2000');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());




// Destructuring in ES6

// Assign variables from objects
// old way
var voxel = { x: 3.6, y: 4.5, z: 6.54 };
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// using desrtucturing
const {x, y, z} = voxel;
const {x : a, y : b, z : c} = voxel; // to change the names of the variables



// Assign variables from nested objects
const nest = {
    start: { x: 5, y:6 },
    end: {x: 6, y:7 }
};
// reassigning values using destructuring
const { start : {x: startX, y: startY }} = nest; // startX possesses value of x and startY of y


// Assign variables from Arrays
const [q, r] = [1, 2, 3, 4, 5];
// stores value 1 in q and 2 in r
// to skip values - const [q,,, r] - will store value 1 in q and 4 in r



// Rest operator to Reassign Array Elements
const [q, r, ...rest] = [1, 2, 3, 4, 5];
// value 1 stored in q and value 2 stored in r, the remaining values stored in 'rest' in form of an array
// rest variable only works correctly as the last element in the list



// Use destructuring to pass an object as a functions parameters
// old/original method
const profileUpdate = (profileData) => {
    const {name, age, nationality, location } = profileData;
    // do something with these variables
}

// you can use destructuring to do the exact same thing as above by directly placing variables as shown below
const profileUpdate = ({name, age, nationality, location }) => { // if you only want to use name and age you dont have to pass the other values and so it saves data by not having to create an object
    // do something with these variables
}




























































