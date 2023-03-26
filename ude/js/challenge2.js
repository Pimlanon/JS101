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

//---------------------
//.push()
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
