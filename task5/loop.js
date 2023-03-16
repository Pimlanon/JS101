for (let i = 0; i < 5 ; i++){
    console.log('Hello World' + i)
}
console.log('-------------');

//ลูปเลขคี่ ให้น้อยกว่า 5
for (let i = 0; i < 5 ; i++){
    if (i % 2 !== 0) console.log(`I am odd ` + i);
}
console.log('-------------');

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}
console.log('----------------');

for (let i = 0; i < 5; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log('Hello');
    }
}

//for loop รู้ค่าตัวสุดท้าย
//while loop ไม่รู้ค่าสุดท้าย เช่น ต้องรอลูกค้ามาบอกรหัสเกม 

for (let i = 0; i <= 4; i++) {
    let temp = ''
    for (let j = 0; j <= i; j++) {
        temp += '*'
    }
    console.log(temp);
    }
    
    console.log('-------------');

    for (let i = 1; i <= 5; i++) {
    let temp = ''
    for (let j = 1; j <= i; j++) {
        temp += '*'
    }
    console.log(temp);
    }


    function oddNumber(number) {
        let i = 0
        while (i <= number) {
            if (i % 2 !== 0) {
                console.log(i)
            }
            i++
        }
    }
    oddNumber(50);
console.log('-------------------------');


    let star = '';
for (let i = 0; i < 5; i++) {
    //console.log('i is' + i);
    for (j = 0; j < 1; j++) {
        //console.log('j is' + j);
        star = star+('*');
        console.log(star);
    }
}