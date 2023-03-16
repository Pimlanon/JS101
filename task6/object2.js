//functionนี้ เหมือนสร้างโรงงานรถโล่งๆ
function myCar (make, model) {
    return{
        make,model,
        drive(){
            console.log(drive);
        }
    };
}
//กำนหดว่าให้เอาข้อมูลรถตามนี้ใส่เข้าไปในโรงงานข้างบน
const car = new myCar('BMW', 900); //new เป็น new object สร้างมารับค่า
console.log(car); //{ make: 'BMW', model: 900, drive: [Function: drive] }

const car1 = new myCar('Toyota', 1530);
console.log(car1); //{ make: 'Toyota', model: 1530, drive: [Function: drive] }


//----------------------------------------
// let myCar = {
//     make : 'Benz',
//     made : 'EZ20',
//     year : 2000,
//     drive : function () {
//         console.log('Driving car');
//     }
// };
// console.log(myCar);

// อันนี้เวลาจะแก้อะไรมันยุ่งยาก เยอะ ต้องแก้ make, made บลาๆ เลยมี constructor function มาช่วย 