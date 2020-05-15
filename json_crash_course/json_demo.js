

// JavaScript Object
var person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: 'Baker Street',
        hno: '221b'
    },
    children: ['Brianna', 'Nicholas']
};

// to access object
console.log(person.address.street);
// to access array
console.log(person.children[0]);

// to convert above object to string which is formatted in JSON Syntax
person = JSON.stringify(person);
console.log(person);

// to convert above created string to JavaScript Object
person = JSON.parse(person);
console.log(person);

// JSON Object
var personJSON = {
    "name" : "John Doe",
    "age" : 30,
    "email" : "johndoe@email.com"
};

console.log(personJSON);

// to create an array of objects
var people = [
    {
        name: 'jane doe',
        age: 30
    },
    {
        name: 'pratyush',
        age: 20
    },
    {
        name: 'sarah',
        age: 21
    }
];

// to access values
console.log(people[1].name);

// to access all values
// var output = '';
// for(let i = 0; i<people.length; i++)
// {
//     //console.log(people[i].name);
//     // to output on screen
//     output += '<li>'+people[i].name+'</li>';
// }
// document.getElementById('people').innerHTML = output;


























