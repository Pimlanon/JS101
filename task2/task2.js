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

// undefined : ไม่มีค่าใด ๆ เลย
let age; //ไม่ได้ใส่ค่ากำหนดให้
console.log(age, age+3, `My age is ${age}`); //My age is undefined ไม่ถูกกำหนดค่า 

//null : มีค่านะ แต่เป็นค่าว่าง ๆ เอาไว้clear/resetค่า ต่างจาก undefined ที่ไม่มีค่าเลย
// let age = null;
// console.log(age, age+3, `My age is ${age}`);

//array เรียงลำดับเริ่มที่   apple=0  banana=1  orange=2 | length: 3
let selectedFruits = ['Apple', 'Banana', 'Orange'];
console.log(selectedFruits);
console.log(selectedFruits[0]); //apple
console.log(selectedFruits[3]); //undefined

selectedFruits [3] = 'Pineaple'; //ระบุเพิ่ม จากที่ไม่มี 3 ให้มีค่าเป็น pineapple
console.log(selectedFruits[3]); //pineapple

selectedFruits [4] = 5; //ลองใส่เป็นเลขได้เหมือนกัน
console.log(selectedFruits[4]); // 5

selectedFruits [1] = 'Pear'; // change Banana >> Pear
console.log(selectedFruits); //'Apple', 'Pear', 'Orange', 'Pineaple'| length: 5