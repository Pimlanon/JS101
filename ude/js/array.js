"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/*
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
*/

// Elements
/*
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//SLICE SPLICE REVERSE CONCAT JOIN

/*
let arr = ['a', 'b', 'c', 'd', 'e']

//*slice จะตัดเนื้อหาบางส่วน non-mutation
console.log(arr.slice(2)); //[ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); //[ 'c', 'd' ]
//ใส่ - คือเริ่มจากตัวท้ายของ array
console.log(arr.slice(-2)); //[ 'd', 'e' ]
console.log(arr.slice(-1)); //[ 'e' ]
console.log(arr.slice(1, -2)) //[ 'b', 'c' ]
console.log(arr.slice()); //[ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); //[ 'a', 'b', 'c', 'd', 'e ]

//*splice mutate นะ
//console.log(arr.splice(2)); //[ 'c', 'd', 'e' ]
//console.log(arr); //[ 'a', 'b' ]
//คนมักใช้ splice ลบ element ที่ไม่ต้องการ อย่างตัวอย่างจะลบเอาตัวที่เป็น the last ออก ด้วย -1
arr.splice(-1); //ลบ e
console.log(arr); //[ 'a', 'b', 'c', 'd' ] e หายไปแล้ว

arr.splice(1, 2); //ลบ b กับ c
console.log(arr); //[ 'a', 'd' ]

//*reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ] มัน mutate

//*concat non-mutate
const letters = arr.concat(arr2);
console.log(letters);
/* ผลที่ได้
[
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j'
]
*/

/*
console.log([...arr, ...arr2]);
//ผลที่ได้เหมือนข้างบน แค่ให้เห็นว่า concat ทำงานเหมือนอันนี้

//*join ทำให้เป็ร string พร้อมแบ่งแต่ละตัวด้วย -
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

*/

//--------------------------------

//Looping Arrays: forEach

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
    }
}

console.log('-----------forEach--------------')
movements.forEach(function(mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1} You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
    }
});
*/

/*
-----------forEach--------------
Movement 1 You deposited 200
Movement 2 You deposited 450
Movement 3 You withdrew 400
Movement 4 You deposited 3000
Movement 5 You withdrew 650
Movement 6 You withdrew 130
Movement 7 You deposited 70
Movement 8 You deposited 1300
*/

//--------------------------------

//THE MAP METHOD

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

//ถ้า map จะใช้ function
const movementsUSD = movements.map(function(mov) {
    return mov * eurToUsd;
})

//เหมือนข้างบน แต่ย่อ function ด้วย arrow ให้เป็นสั้นๆแบบบรรทัดเดียว
//const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
*/

/*
ผลของ ovementsUSD มาจาก movements * eurToUsd
[
    220.00000000000003, 495.00000000000006, -440.00000000000006,
    3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002,
];
*/

/*
//ถ้าใช้ตัวนี้ ได้ผลเหมือน map แต่คนละวิธี อันนี้เราจะใช้ loop over one array and manually create a new one
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriotions = movements.map((mov, i) =>

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

    //ถ้าย่อแบบอันบนงง ก็เขียนอันล่าง
    // if (mov > 0) {
    //     return `Movement ${i + 1} You deposited ${mov}`;
    // } else {
    //     return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`
    // };
);

console.log(movementsDescriotions)
*/

//--------------------------------

//THE FILTER METHOD

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposit = movements.filter(function(mov) {
    return mov > 0;
});
console.log(movements);
console.log(deposit); //[ 200, 450, 3000, 70, 1300 ]

//ใช้ for...of แทน filter
const depositFor = [];
for (const mov of movements)
    if (mov > 0) depositFor.push(mov);
console.log(depositFor); //[ 200, 450, 3000, 70, 1300 ]

const withdrawls = movements.filter((mov) => mov < 0);
//ถ้าข้างบนสั้นๆงง ก็เขียนแบบนี้ ได้เหมือนกัน
// const withdrawls = movements.filter(function(mov) {
//     return mov < 0;
// });

console.log(withdrawls); //[ -400, -650, -130 ]
*/

//--------------------------------

//THE REDUCE METHOD

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function(acc, cur, i) {
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc + cur
// }, 0);

//เขียนข้างบนด้วย arrow
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance); //3840

//ใช้ for...of แทน reduce
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); //3840

//ใช้ reduce หาค่าที่มากสุด
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]); //ถ้าหาค่ามากสุด หรือต่ำสุด จะใส่แค่ 0 อย่างปกติไม่ได้
console.log(max); //3000
*/

//-----------------------------

//CODING CHALLENGE #2

/*
const calcAverageHumanAge = [5, 2, 4, 1, 15, 8, 3]

const humanAge = calcAverageHumanAge.map(function(dogAge) {
    if (dogAge <= 2) {
        return 2 * dogAge;
    } else if (dogAge > 2) {
        return 16 + (dogAge * 4)
    }
});

console.log(humanAge); //[36,  4, 32, 2, 76, 48, 28]

const ageMore18 = humanAge.filter(function(more18) {
    return more18 > 18
});
console.log(ageMore18); //[ 36, 32, 76, 48, 28 ]

const aveAge = ageMore18.reduce(function(acc, cur) {
    return (acc + cur)
}, 0);
console.log(aveAge) //220

const average = aveAge / ageMore18.length;
console.log(average) //44
*/

//-----------------------------

//THE FIND METHOD

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter จะ return all the element taht match the condition
//find มันแค่ return the 'FIRST' element ที่ตรงเงื่อนไข 
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal); //-400
*/