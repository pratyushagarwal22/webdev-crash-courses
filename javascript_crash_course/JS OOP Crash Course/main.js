// const s1 = 'Hello'; //primitve - literal
// console.log(typeof s1);

// const s2 = new String('Hello'); //object
// console.log(typeof s2);

// console.log(window);
// window.alert(1); // no need of using window since it is parent object. Straight alert() will also work


// OBJECT LITERALS
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: ' 2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// To create more books you can use array of objects
// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// CONSTRUCTORS

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     };
// }

// // Instantiate an object
// const book1 = new Book('Book1', 'John Doe', 2013);
// const book2 = new Book('Book2', 'Jane Doe', 2016);

// console.log(book1.getSummary());

// PROTOTYPES

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // getSummary as a prototype
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// // getAge
// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// };

// // Revise / Change Year
// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// };

// // Store in prototype as we do not want a function for every object. so to conseerve space
// // Instantiate an object
// const book1 = new Book('Book1', 'John Doe', 2013);
// const book2 = new Book('Book2', 'Jane Doe', 2016);

// console.log(book1);
// book1.revise(2019)
// console.log(book1);



// INHERITENCE

// Constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in the year ${this.year}`;
// };

// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month;
// }

// // Inherit Protoytpe
// Magazine.prototype = Object.create(Book.prototype);
// // Instantiate Magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', 2018, 'Jan');
// console.log(mag1);

// // Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;


// Different way to create objects
// First create object of the prototype

// const bookProtos = {
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`;
//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// }

// Create Object

// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John doe';
// book1.year = 2013;

// const book1 = Object.create(bookProtos, {
//     title: {value: 'Book One'},
//     author: {value: 'John Doe'},
//     year: {value: 2013}
// });
// console.log(book1);

// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`;
//     }

//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
//     revise(newYear) {
//         this.year = newYear;
//         this.revised = true; 
//     }

//     static topBookStore() {
//         return 'Bookworm';
//     }
// }

// static methods can be defined and used without instantiating objects

// Instantiate Object
// const book1 = new Book('Book One', 'John Doe', 2013);
// console.log(book1);
// console.log(book1.getAge());
// book1.revise(2019);
// console.log(book1.getSummary());
// console.log(book1);

// console.log(Book.topBookStore());



// Sub Classes

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }


}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag 1', 'John Doe', 2019, 'Jan');
console.log(mag1.getSummary());





























































