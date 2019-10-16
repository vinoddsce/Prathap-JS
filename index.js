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
        return getAge(currentYear);

        function getAge(year) {
            return year - this.yearOfBirth;
        }


    }
}

var yearOfBirth = 2000;

// window.person.displayFullName();
// person.displayFullName();

console.log(person.calculateAge(2019));





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