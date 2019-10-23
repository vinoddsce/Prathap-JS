// Arrays


// Syntax:
//  var arr_name  = [values saperated by comma]

var numbers = [10, 43, 11, 97, 3, 85, -23, 0, -9];
// console.log(this);

// var lastName = "Unknow";

// function display() {
//     var lastName = "User";
//     console.log(lastName);
// }
// display();

// console.log(display);


var person = {
    firstName: "Vinod",
    lastName: "Kumar",
    yearOfBirth: 1990,
    isMarried: false,

    displayFullName: function () {
        console.log(this);
        console.log(this.firstName + person.lastName);
    },

    calculateAge: function (currentYear) {
        // return currentYear - this.yearOfBirth;
        var getAge = (year) => {
            console.log(this);
            return year - this.yearOfBirth;
        }
        // function getAge(year) {
        //     return year - this.yearOfBirth;
        // }
        return getAge(currentYear);
    }
}

var yearOfBirth = 2000;

// window.person.displayFullName();
// person.displayFullName();

console.log(person.calculateAge(2019));



// Arrow Function - Used to resolve this key word issue. 


// var name = () => {
// }

var sayHiArr = (name) => {
    console.log("Say Hi From Arrow Function !!!!!", name, this);
}
sayHiArr("Vinod");



// var a = 10;

// function A() {
//     var a = 100;
//     function B() {
//         var b = 200;
//         var a = 300;
//         function C() {
//             var c = 22;
//             console.log("a: ", a);
//             console.log("b: ", b);
//             console.log("c: ", c);
//         }
//         C();
//     }
//     B();
// }

// A();



// Higher Order Function
// HOF is a function which return another function 
// OR which accecpt another function as parameter 
// OR Both.


// function main(fn) {
//     fn();
// }


// function sayHi() {
//     console.log("Hi");
// }

// main(sayHi);



function first() {
    return function inner() {
        console.log("inner function");
    }
}

// var inner = first();
// inner();

// first()();


function mathLib(type) {

    // Closures
    const PI = 3.14;

    if (type === "add") {
        return function add(a, b) {
            return a + b;
        }
    }

    if (type === "sq") {
        return function sq(a) {
            return a * a;
        }
    }

    return function multiplyWithPI(a) {
        return a * PI;
    }
}

var add = mathLib("add");
console.log(add);
var sum = add(100, 200);
console.log("Sum: ", sum);
var sq = mathLib("sq");
console.log(sq);
var mulPi = mathLib("");
console.log(mulPi);
