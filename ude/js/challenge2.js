//failed
// const pointDolphin = 44 + 23 +71; //138
// const pointKoala = 65 + 54 + 49; //168
// console.log(pointDolphin, pointKoala);

// const calcAverage = (points) => {
//     return points / 3 
// }
// console.log(calcAverage(pointDolphin)); //46
// console.log(calcAverage(pointKoala)); //58

// const checkWinner = (avgDolphin, avgKoala) => {
//     if (avgDolphin >= 2 * avgKoala) {
//         console.log()
//     }
// }

// avgDolphin(46)
// avgKoala(58)

//---------------------------------------
/*
const calcAverage = (a, b, c) => (a + b +c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas); //46, 56

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) { 
        console.log(`Dolphins is the winner (${avgDolphins} vs. ${avgKoalas})` );
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas is the winner (${avgKoalas} vs. ${avgDolphins})` );
    } else {
        console.log(`No team wins`)
    }
}

checkWinner(scoreDolphins, scoreKoalas); //No team wins
checkWinner(500, 110); //Dolphins is the winner (500 vs. 110)

//test2
scoreDolphins = calcAverage(85, 54, 41); //60
scoreKoalas = calcAverage(23, 34, 27);  //28
console.log(scoreDolphins, scoreKoalas); 
checkWinner(scoreDolphins, scoreKoalas); //Dolphins is the winner (60 vs. 28)
*/

//---------------------
//.push()
/*
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends); //[ 'Micheal', 'Steven', 'Peter', 'Jay' ]
console.log(newLength); //4

//.unshift()
friends.unshift('John');
console.log(friends); //[ 'John', 'Micheal', 'Steven', 'Peter', 'Jay' ]

//remove elements
//.pop()
friends.pop(); 
const poped = friends.pop(); 
console.log(friends); //[ 'John', 'Micheal', 'Steven' ]
console.log(poped); //Peter

//.shift()
friends.shift();
console.log(friends); //[ 'Micheal', 'Steven' ]

console.log(friends.indexOf('Steven')); //1

console.log(friends.includes('Steven')); //true
console.log(friends.includes('BOb')); //false

if (friends.includes('Steven')) {
    console.log('You have a friend call Steven') //You have a friend call Steven
}
*/
//--------------------------

//#challenge2
/*
//failed
const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300 ) {
        return billValue * 0.15
    } else if  (billValue <= 49 || billValue >= 301) {
        return billValue * 0.2
    }
}

console.log(calcTip(100)); //15

const bills = [125, 555, 44];
console.log(bills.indexOf(0))

const tips = [];
*/
/*
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip) //[ 125, 555, 44 ] [ 18.75, 111, 8.8 ]

const total1 = bills[0] + tip[0] 
const total2 = bills[1] + tip[1] 
const total3 = bills[2] + tip[2]
console.log(total1, total2, total3) //143.75 666 52.8
*/
//-------------------------------------

/*
//Dot vs Bracket Notation
const jonarArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peter', 'Steven']
];

//create object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michale', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName); //Schmedtman
console.log(jonas['lastName']); //Schmedtman

//วิธีนี้ใช้กับ . ไม่ได้
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); //Jonas
console.log(jonas['last' + nameKey]); //Schmedtman

const interestedIn = prompt('What do you want to know about Joans? Choose between firstName, lastName, age, job, and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! hiChoose between firstName, lastName, age, job, and friends');
}

//เพิ่ม value เข้าไปใน obj จากที่ตอนแรกไม่มีได้ 2 วิธี
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//#challenge
//เขียนได้ 2 แบบ เลือกที่ชอบได้เลย
console.log(jonas.firstName + ' has' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]  )
//Jonas has3 friends, and his best friend is called Michale
console.log(`${jonas.firstName}  has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}` )
//Jonas has3 friends, and his best friend is called Michale
*/

//-------------------------------------
//obj method

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    //age: 2037 - 1991,
    bitrthYear: 1991,
    job: 'teacher',  //string value
    friends: ['Michale', 'Peter', 'Steven'], //array value
    hasDriverLicense: true, //boolean value

    // calcAge: function(bitrthYear) { //method
    //     return 2037 - bitrthYear;
    // }

    // calcAge: function() { 
    //         //console.log(this)
    //         return 2037 - this.bitrthYear;
    //     }

    calcAge: function() { 
        this.age = 2037 - this.bitrthYear;
        return this.age;
    }
};

//function ทั่วไป ไม่ต่างจาก method ข้างบนเท่าไหร่
// const calcAge = function(bitrthYear) {
//     return 2037 - bitrthYear
// }

//console.log(jonas.calcAge(1991)); //46
//console.log(jonas['calcAge'](1991)); //46

console.log(jonas.calcAge()); //46

console.log(jonas.age); //46

*/
//--------------------------

/*
//object method
const non = {
    firstName: 'Non',
    lastName: 'Pim',
    job: 'teacher',
    bitrthYear: 2000,
    hasDriverLicense: true,
    // calcAge: function(bitrthYear) {
    //     return 2023 - bitrthYear;
    // },
    calcAge: function() {
        this.age = 2023 - this.bitrthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and she has a ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
}

//console.log(non.calcAge(2000)); //23
console.log(`${non.firstName} is a ${non.calcAge(2000)}-year old ${non.job}, and she has a ${non.hasDriverLicense}`)
//Non is a 23-year old teacher, and she has a true

console.log(non.age); //23

console.log(non.getSummary())
//Non is a 23-year old teacher, and she has a a driver's license.
*/

//-------------------
/*
//#code challenge 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMIvalue = this.mass / (this.height * this.height)
        return this.BMIvalue; 
    }
}

console.log(Math.floor(mark.calcBMI())); //27
console.log(mark.BMIvalue); //27.309968138370508

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMIvalue = this.mass / (this.height * this.height)
        return this.BMIvalue; 
    }
}

console.log(Math.floor(john.calcBMI()));//24
console.log(john.BMIvalue); //24.194608809993426

if (mark.BMIvalue> john.BMIvalue) {
    console.log(`${mark.fullName}'s BMI (${Math.floor(mark.BMIvalue)}) is higher than ${john.fullName}'s BMI (${Math.floor(john.BMIvalue)}) !`)
    //Mark Miller's BMI (27) is higher than John Smith's BMI (24) !
}
*/
//--------------------------------

//Iteration: The for Loop 

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/
//--------------------------------

//looping array, breaking and continuing

/*
const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    //types[i] = typeof jonas[i];

    types.push(typeof jonas[i]); 
    //[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]
}

console.log(types); //[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages); //[ 46, 30, 68, 17 ]

//continue and break
console.log('--ONLY STRING--')
//ให้ continue ข้ามทุกตัวที่ไม่ใช่ string 
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]); 
    //Jonas string
    //Schmedtman string
    //teacher string
    
}

console.log('--BREAK WITH NIMBER--')
//เจอตัวเลขแล้วให้หยุดที่ตัวก่อนหน้า
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]); 
    //Jonas string
    //Schmedtman string
}
*/

//------------------------
//looping backward and looping in loop
/*
const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//looping in loop
for (let exercise = 1; exercise <= 4 ; exercise++) {
    console.log(`----------- Strating exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`)
    }
    
}
*/
//------------------------

//the WHILE LOOP
/*
for (let rep = 1; rep <= 10; rep++) {
    //console.log(`lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) { 
    //console.log(`WHILE: lifting weight repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end..`)
    }
}
*/

//-----------------------------
/*
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip) //[ 125, 555, 44 ] [ 18.75, 111, 8.8 ]

const total1 = bills[0] + tip[0] 
const total2 = bills[1] + tip[1] 
const total3 = bills[2] + tip[2]
console.log(total1, total2, total3) //143.75 666 52.8
*/

//coding challenge #4
const calcTip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2; 
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length ; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals)

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));  //4
console.log(calcAverage(totals)); //275.19
console.log(calcAverage(tips)); //42.89

