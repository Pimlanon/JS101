// function calWithReturn (num1,num2) {
//     return num1 + num2;
// }
// const total = calWithReturn(5,9);
// console.log(total);

// function calUseReturn(total) {
//     console.log (total*5);
// }
// calUseReturn(total);

// function cal(a){
//     console.log (a+1);
// }
// cal(total);

//----------------------------------------------------------------

// 2
// 2.1
const friendName = (name1,name2,name3)=> console.log(`Welcome ${name1}, ${name2}, ${name3}`);
friendName('Ang','Aug','lung'); // Welcome Ang, Aug, lung
// 2.2
const myAge = birthYear => now.getFullYear() - birthYear;
// 2.3 
const friendNameAndAge = (name1,name2,name3,birthYear1,birthYear2,birthYear3)=> {
    // Year now - birthYear
    const age1 = myAge(birthYear1);
    const age2 = myAge(birthYear2);
    const age3 = myAge(birthYear3);
    // log output
    console.log(`Welcome ${name1}, you are ${age1}.Welcome ${name2}, you are ${age2}.Welcome ${name3}, you are ${age3}`);
};
friendNameAndAge('Ang','Aug','lung',1990,1995,1996); // Welcome Ang, you are 29.Welcome Aug, you are 28.Welcome lung, you are 27