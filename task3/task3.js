let buyerAge = 18;
if (buyerAge < 18) {
    console.log ('cannot buy it');
} else {
    console.log ('cheers!');
}


// --------------------------------------
// declarations

function info(name) {
    console.log('Hello ' + name);
}
info ('Jack');

// expression can prevent from a 'hoisting'
const myInfo = function(name) {
    console.log('Hello ' + name);
};
myInfo('Jill'); //<<<expression style need to declare value under function


//---------------------------
//arrow function use => to less coding
const mySecondInfo = name => console.log('Hello ' + name);
mySecondInfo('Jenny');


//write without arrow function 
function addNumbers(a,b) {
    return a + b;
}
console.log (addNumbers (5,3));

//turn to arrow function
const addArrowNumbers = (a,b) => console.log (a + b);
addArrowNumbers(5,5);


//-------------
const myFunction = function(a,b) {
    return a*b;
}

let x = myFunction(5,3);
let y = x
console.log(y);
