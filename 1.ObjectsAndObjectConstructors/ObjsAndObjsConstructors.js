// // Sum object properties
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key]
// }
// sum


// // Multiply numeric property values by 2

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// const multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2
//         }
//     }
// }
// multiplyNumeric(menu);
// menu





// const anyObj = {
//     property: 'Value!'
// }
// // dot notation
// console.log(anyObj.property)
// // bracket notation : find a property as a string
// console.log(anyObj["property"]);



// function Book() {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.theHobbit = function () {
//         // console.log(`${title} by ${author}, ${pages}, ${read}`);
//         return (`${title} by ${author}, ${pages}, ${read}`);
//     }
// }



// // The Prototype
// function student() {
// }
// student.prototype.sayName = function () {
//     console.log("this.name: ", this.name);
//     console.log("this.name: ", this.grade);
// }


// function eighthGrader(name, grade) {
//     this.name = name
//     this.grade = grade
// }

// eighthGrader.prototype = Object.create(student.prototype)

// const carl = new eighthGrader('carl', 6);
// console.log(carl.sayName());
// console.log(carl.grade);

// const fer = new eighthGrader('fer', 8);
// console.log(fer.sayName());
// console.log(fer.grade);


// function Print(run, walk) {
//     this.runnig = run
//     this.walking = walk
// }

// Print.prototype.run = function () {
//     console.log(this.runnig);
// }

// Print.prototype.walk = function () {
//     console.log(this.walking);
// }

// const actionsObj = new Print('Im running', 'Im walking to the park')

// actionsObj.run();
// console.log("Action: ", actionsObj);



// // example
// function Account() {

// }

// // constructor is an obj
// const accObj = new Object();
// console.log("Obj: ", accObj.constructor);

// // constructor is an obj
// const newUserObj = new Account();
// console.log("Obj: ", newUserObj.constructor);





// function Plant() {
//     this.country = "Mexico";
//     this.isOrganic = true;
// }

// console.log(Plant);

// // Add the showNameAndColor method to the Plant prototype property
// // Plant.prototype.showNameAndColor = function () {
// //     console.log("I am a " + this.name + " and my color is " + this.color);
// // }

// console.log(Plant);




function Employee(name, role, age) {
    this.name = name;
    this.role = role;
    this.age = age
}

let empObj1 = new Employee();
empObj1.name = 'Fer';
empObj1.salary = 30000;
empObj1.role = 'Software Engineer';
empObj1.age = 27;
console.log("Employe 1 Obj: ", empObj1);

let empObj2 = new Employee();
empObj2.name = 'Tom';
empObj2.salary = 10000;
empObj2.role = 'Developer';
empObj2.age = 17;
console.log("Employe 2 Obj: ", empObj2);


for (let key in empObj1) {
    console.log(empObj1[key]);
}

console.log(empObj1.age);





// exmaple : contructor
function details() {
    this.website = 'Tools QA'
    this.language = 'Js'
}


let tutorials = new details();
// let info = new details();

const h4Website = document.querySelector('.website');
h4Website.innerHTML = (tutorials.website);

const h4Language = document.querySelector('.language');
h4Language.innerHTML = (tutorials.language);

// prototype
details.prototype.Author = "Arunkumar Chandra";
const h4Author = document.querySelector('.author');
h4Author.innerHTML = (tutorials.Author);

// adding a method to the object
details.prototype.methodFunc = () => { }

// another method:
details.prototype.Owner = () => {
    // const sum = 34 + 8
    return 'Fernando Gonzalez'
}

const spanOwner = document.querySelector('.owner')
spanOwner.innerHTML = tutorials.Owner()

console.log(details);



// Exercise

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.theHobbit = info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

let firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");

// console.log(firstBook.info());




// Recommended Method for Prototypal Inheritance

function Student() { }

Student.prototype.sayName = function () {
    console.log(this.name);
}

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader('carl')
carl.sayName()
console.log(carl.grade);