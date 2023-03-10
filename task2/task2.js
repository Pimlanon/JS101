// string
let firstName = 'Lak';
let lastName = 'Donovan';

let fulName = firstName + '' + lastName;
console.log(fulName);

// Boolean
let info = `My name is ${fulName} and I am ${firstName}`; 
console.log(info);

let email = 'donovanlak@gmail.com';
let findLetter = email.includes('@');
console.log(findLetter);

// number
let radius = 10;
const pi = 3.14;

console.log(radius,pi);
console.log(10/2);

let result = radius % 3; //this will get remain
console.log(result);

let bidMas = 5 * (10-3)**2; //ไม่มี () จะเรียงจากซ้ายไปขวา | 5 * (10-3)**2 อันนี้ () ก่อน
console.log(bidMas);

// undefined
let age; //ไม่ได้ใส่ค่ากำหนดให้
console.log(age); //undefined ไม่ถูกกำหนดค่า 