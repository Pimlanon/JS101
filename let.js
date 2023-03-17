// function fizzBuzz (n) {
//     const answer = []
    
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0)
//             answer.push("FizzBuzz")
//         else if (i % 3 == 0)
//             answer.push("Fizz")
//         else if (i % 5 == 0)
//             answer.push("Buzz")
//         else
//             answer.push(i.toString())
//     }
    
//     return answer
// };

// console.log(fizzBuzz(14))

function fizzbuzz(n) {
    const ans = []  
for (let i = 1; i <= n; i++ ){
    
    if (i % 3 === 0 && i % 5 === 0) {
        ans.push('FizzBuzz');
        } else if (i % 3 === 0) {
            ans.push('Fizz');
        } else if (i % 5 === 0) {
            ans.push('Buzz');
        } else {
            ans.push(i);
        }
    }
    return ans
}

console.log(fizzbuzz(16));

console.log('----------------------------')

const arr = [1, 2, 3, 4, 5]
const logItem = (item) => {
    console.log(item);
}

arr.forEach((item,index) => {
    arr[index] = item + 100
})
console.log(arr);