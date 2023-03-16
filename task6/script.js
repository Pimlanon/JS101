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
});
console.log(count);