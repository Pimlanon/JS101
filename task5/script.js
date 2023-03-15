let numbers = [3, 4]; 
console.log (numbers); //[3, 4]

numbers.push(5,6); //ต่อท้าย
console.log(numbers); //[3, 4, 5, 6]

numbers.unshift(1,2); //เพิ่มหน้า
console.log(numbers) //[1, 2, 3, 4, 5, 6]

            //(แทรกตรงไหน, ลบตัวไหน, แทรกคำว่าอะไร)
numbers.splice(1, 0, 'apple', 'orange');  //ไม่ได้ลบอะไรออกไป แค่แทรกเข้าไปในตำแหน่งนั้น
console.log(numbers); // [1, 'apple', 'orange', 2, 3, 4, 5, 6]

const last = numbers.pop(); //เอาท้ายออก 6
console.log(numbers); //[1, 'apple', 'orange', 2, 3, 4, 5]
console.log(last); //6 ที่ถูกเอาออก

const first = numbers.shift(); //เอาหน้าออก 1
console.log(numbers); //['apple', 'orange', 2, 3, 4, 5]
console.log(first); //1 ที่ถูกเอาออก

const middle = numbers.splice(0,2); //เอาตำแหน่งที่ 0 ออก: 'apple' | และเอาออกสองตัว: 'apple', '7' 
console.log(numbers);//[2, 3, 4, 5]
console.log(middle);// ['apple', 'orange'] ที่ถูกเอาออก

anotherArray = numbers;
console.log(anotherArray); //[2, 3, 4, 5]

numbers = [];
console.log(numbers); //[]
console.log(anotherArray);//[2, 3, 4, 5]

numbers.length = 0;
console.log(numbers); //[]

//-------------------------------------------------------------------
const newNumbers = [1, 2, 3, 1, 4];
console.log(newNumbers.indexOf('1'));//-1 ไม่มีค่า เพราะที่ประกาศเป็น number แต่ดันหา string
console.log(newNumbers.indexOf(1)); //0 หาเจอตำแหน่งเจอ แต่แค่ตัวแรก
console.log(newNumbers.lastIndexOf(1)); //3 เลข 1 อีกตัวอยู่ตำแหน่ง 3

console.log(newNumbers.indexOf('apple') !== -1); //false

console.log(newNumbers.includes(1)); //true

console.log(newNumbers.indexOf(1,2)); //3 หาอะไรในตำแหน่งไหน

//-------------------------------------------------------------
const start = [1, 2, 3];
const second = [4, 5, 6];
const combind = start.concat(second); //concat เอาข้างหน้าต่อด้วยอันหลัง
console.log(combind); //[1, 2, 3, 4, 5, 6]

const combindReverse = second.concat(start);
console.log(combindReverse); //[4, 5, 6, 1, 2, 3]

const combindNew = [...start,...second];//อันนี้ก็ใช้ได้ เหมือน concat
console.log(combindNew); //[1, 2, 3, 4, 5, 6]

const slice = combind.slice(2);//
console.log(slice);//[3, 4, 5, 6]

//--------------------------
