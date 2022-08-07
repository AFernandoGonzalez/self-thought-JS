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



function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.theHobbit = function () {
        // console.log(`${title} by ${author}, ${pages}, ${read}`);
        return (`${title} by ${author}, ${pages}, ${read}`);
    }
}



// The Prototype
function student() {
}
student.prototype.sayName = function () {
    console.log("this.name: ", this.name);
    console.log("this.name: ", this.grade);
}


function eighthGrader(name, grade) {
    this.name = name
    this.grade = grade
}

eighthGrader.prototype = Object.create(student.prototype)

const carl = new eighthGrader('carl', 6);
console.log(carl.sayName());
console.log(carl.grade);

const fer = new eighthGrader('fer', 8);
console.log(fer.sayName());
console.log(fer.grade);


function Print(run, walk) {
    this.runnig = run
    this.walking = walk
}

Print.prototype.run = function () {
    console.log(this.runnig);
}

Print.prototype.walk = function () {
    console.log(this.walking);
}

const actionsObj = new Print('Im running', 'Im walking to the park')

actionsObj.run();
console.log("Action: ", actionsObj);



// example
function Account() {

}

// constructor is an obj
const accObj = new Object();
console.log("Obj: ", accObj.constructor);

// constructor is an obj
const newUserObj = new Account();
console.log("Obj: ", newUserObj.constructor);