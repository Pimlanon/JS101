//.forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((item,index) => {
    console.log(index,item);
});


const letters = ['a','b','c', 'd', 'a', 'c', 'a'];
let count = {}; //create empty object to keep track the count
letters.forEach(item =>{
    if (count[item]){ //check if we have an letter in
        count[item]++;
    }else{
        count[item] = 1;
    }
    console.log(count);
});
console.log('-------------------------------');

//.map
// const storeUSD = [5, 6, 7, 8];
// const storeEUR = storeUSD.map(value => value*=0.85);

// console.log(storeUSD);
// console.log(storeEUR);

//.map with function
let storeUSD = [5, 6, 7, 8];

function toEuros(value) {
    value *= 0.85;
    return value;
}
let storeEUR = storeUSD.map(toEuros);

console.log(storeUSD);
console.log(storeEUR);

console.log('-------------------------------');

