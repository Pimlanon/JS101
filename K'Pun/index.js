//const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";


const newGame = [
    ['*', '░', '░'],
    ['░', '0', '░'],
    ['░', '░', '0'],
    ['░', '░', '░'],
    ['░', '0', '^']
];

//create game
//1 create field 5*5
//random bg
//random hole
//random hat
//create startpoint
//2 create rule
//3 create input (for control star)

class Field {
    constructor(field) {
        this.field = field;
    }

    //create bg 5*5
    static createMap(row, column) {
        let map = [];
        for (let i = 1; i <= row; i++) {
            let arr = [];
            for (let j = 1; j <= column; j++) {
                arr.push(fieldCharacter);
            }
            map.push(arr);
        }

        console.log(map);
        //return map ไม่รู้ต้องใส่ไหม

        //random hat
        const hatLocationY = Math.floor(Math.random() * column);
        const hatLocationX = Math.floor(Math.random() * row);
        map[hatLocationY][hatLocationX] = hat;
        console.log(map);

        //randomstartpoint
        const startLocationY = Math.floor(Math.random() * column);
        const startLocationX = Math.floor(Math.random() * row);

        if (map[startLocationY][startLocationX] === hat || map[startLocationY][startLocationX] === hole) {
            'restart';
        } else {
            map[startLocationY][startLocationX] = pathCharacter;

        }

        console.log(map);



        //create hole use Math.random 
        // let createHole = 0;
        // while (createHole < Math.floor(column * row / 60)) {
        //     const holeLocationY = Math.floor(Math.random() * column);
        //     const holeLocationX = Math.floor(Math.random() * row);
        //     if (map[holeLocationY][holeLocationX] === hat || map[holeLocationY][holeLocationX] === pathCharacter) {
        //         null;
        //     } else {
        //         map[holeLocationY][holeLocationX] = hole;
        //         createHole++;
        //     }
        // };
        // console.log(map);
        // return map;

    }
}




const myMap = new Field(Field.createMap(5, 5));



//-------------------
//---------new new new----
// class Field {
//     constructor(field) {
//       this.field = field;
//     }

//     //create field
//     print() {
//       const newMap = [];
//       this.field.forEach((myField) => {
//         newMap.push(myField.join(''))
//       })
//         newMap.join('\n');
//     console.log(newMap.join('\n'));
//     }

//   }


//   const myField = new Field([
//       ['*','░','░'],
//       ['░','O','░'],
//       ['░','░','O'],
//       ['░','░','░'],
//       ['░','O','^']
//     ])

//   myField.print()


//   console.log(myField.field);