// for (let i = 0; i < 5 ; i++){
//     console.log('Hello World' + i)
// }


//ลูปเลขคี่ ให้น้อยกว่า 5
for (let i = 0; i < 5 ; i++){
    if (i % 2 !== 0) console.log(`I am odd ` + i);
}

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log('Hello');
    }
}

//for loop รู้ค่าตัวสุดท้าย
//while loop ไม่รู้ค่าสุดท้าย เช่น ต้องรอลูกค้ามาบอกรหัสเกม 
i = 0;
while 