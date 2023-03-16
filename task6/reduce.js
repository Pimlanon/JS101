const numbers = [1, 2, 3, 4, 5];
// a=1, c=2 =>3
// a=3, c=3 => 6
// a=6, c=5 => 10
// a=10, c=5 => 15
const sum = numbers.reduce((accumulator, currentValue) => 
  accumulator + currentValue);
console.log(sum); //15