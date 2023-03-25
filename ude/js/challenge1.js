let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
console.log(markBMI) //27.309968138370508

let johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI) //24.194608809993426

let markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI) //true

//chalenge #2
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight ** 2);
console.log(markBMI); //26.87867813490267

johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI) //27.44059917355372

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI) //false