let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
console.log(markBMI) //27.309968138370508

let johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI) //24.194608809993426

let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI) //true

//chalenge1 exercise2
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight ** 2);
console.log(markBMI); //26.87867813490267

johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI) //27.44059917355372

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI) //false

///////////////////////////////////////////////////
//code challenge#3
/*
let scoreDolphins = 96 + 108 + 89;
let scoreKoalas = 88 + 91 + 110;
console.log(scoreDolphins);
console.log(scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log('The winner is Dolphins=');
} else if (scoreKoalas > scoreDolphins) {
    console.log('The winner is Koalas');
} else {
    console.log('Draw!')}
console.log('/////////////////')

//challenge#3 bonus#1
scoreDolphins = 97 + 112 + 101;
scoreKoalas = 109 + 95 + 123;
console.log(scoreDolphins);
console.log(scoreKoalas);
if (scoreDolphins > 100 && scoreDolphins > scoreKoalas) {
    console.log('The winner is Dolphins');
} else if (scoreKoalas > 100 && scoreKoalas > scoreDolphins) {
    console.log('The winner is Koalas');
} else {
    console.log('Draw!')}
console.log('/////////////////')

//challenge#3 bonus#2
scoreDolphins = 97 + 112 + 101;
scoreKoalas = 109 + 95 + 106;
console.log(scoreDolphins);
console.log(scoreKoalas);
if (scoreDolphins >= 100 && scoreDolphins === scoreKoalas) {
    console.log('Draw');
} else if (scoreKoalas >= 100 && scoreKoalas === scoreDolphins) {
    console.log('Draw again');
} 
*/
///////////////////////////////////////////////////

//code challenge#4
let billValue = 430;
/*
if (billValue >= 50 && billValue <= 300) {
    console.log((billValue / 100) * 15);
} else if (billValue < 50 || billValue > 300) {
    console.log((billValue / 100) * 20);
}
*/
// billValue / 100 * 15
let tip = billValue >= 50 && billValue <= 300 ? (billValue / 100) * 15 : (billValue / 100) * 20
console.log(tip);
let totalValue = billValue + tip;
console.log('The bill was ' + billValue + ', the tip was ' + tip + ', and the total value ' + totalValue)
// bill 275 : The bill was 275, the tip was 41.25, and the total value 316.25
// bill 40: The bill was 40, the tip was 8, and the total value 48
// bill 430: The bill was 430, the tip was 86, and the total value 516