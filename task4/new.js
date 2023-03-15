const costOfPayment = costs => {
    const fee = 3;
    const interestFee = 0.01;
    costs = costs + fee + (costs * interestFee);
    console.log(`Maria needs to pay ${costs}`);
    return costs;
}

costOfPayment(1000);



const edsFriends = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}
edsFriends('Tinky Wink','Dipsy','Lala'); 

//part2
function Edage(birthYear) {
    const age = 2023 - birthYear;
    return age
}

console.log(Edage(1990));


//part3
const edsFriendsAndAge = (name_1, name_2, name_3, age_1, age_2, age_3) => {
    console.log(`Welcome ${name_1}, you are ${age_1}. Welcome ${name_2}, you are ${age_2}.Welcome ${name_3}, you are ${age_3}.`);
}
edsFriendsAndAge('Tinky Winky', 'Dipsy', 'Lala', 28, 25, 30);

//------------------------------------------------------------------------------------------------

const greetingAndAge = (name1,name2,name3,birthYear1,birthYear2,birthYear3)=> {
    const age1 = 2023 - birthYear1;
    const age2 = 2023 - birthYear2;
    const age3 = 2023 - birthYear3;
    console.log(`Welcome ${name1}, you are ${age1}.Welcome ${name2}, you are ${age2}.Welcome ${name3}, you are ${age3}`);
};
greetingAndAge('Tinky Winky','Dipsy','Lala',1987,2005,1996);