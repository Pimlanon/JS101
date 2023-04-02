//class expression
//const PersonCl = class {}


//class declaration
class Personcl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //method will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
};

const jessica = new Personcl('Jessica', 1996); //instance
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === Personcl.prototype);

// Personcl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();