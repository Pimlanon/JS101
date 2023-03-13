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