let userName = 'NON';
userName ? console.log(`Hello, ${userName}`) : console.log (`Hello!`);

const userQuestion = 'daijyoubu?';
console.log(`${userName} has asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() *8);
console.log(randomNumber);

let eightBall = '';
switch (randomNumber) {
    case 0 : 
    eightBall = 'It is certain';
    break;
    case 1 : 
    eightBall = 'It is decidedly so';
    break;
    case 2 : 
    eightBall = 'Reply hazy try again';
    break;
    case 3 : 
    eightBall = 'Cannot predict now';
    break;
    case 4 : 
    eightBall = 'Do not count on it';
    break;
    case 5 : 
    eightBall = 'My sources say no';
    break;
    case 6 : 
    eightBall = 'Outlook not so good';
    break;
    case 7 : 
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall);

let raceNumber = Math.floor(Math.random() * 1000);

console.log('----------------------------------');

const registeredEarly = false;
let age = 18;
if (age > 18) {
    raceNumber + 1000
};
if (age > 18 && registeredEarly) {
    console.log(`Race will start at 9:30am. Your number is ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
    console.log(`Race will start at 11:00am. Your number is ${raceNumber}`);
} else if (age < 18) {
    console.log(`Race will start at 12:30am. Your number is ${raceNumber}`);
} else {
    console.log(`see the registration desk`);}
