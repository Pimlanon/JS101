//const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(map) {
        this.map = map;
    }

    print() {
        const newMap = [];
        this.map.forEach((mapAgain) => {
            newMap.push(mapAgain)
        })
        console.log(newMap);
    }



};

function createMap(row, column) {
    let map = [];
    for (let i = 1; i <= row; i++) {
        let arr = [];
        for (let j = 1; j <= column; j++) {
            arr.push(fieldCharacter);
        }
        map.push(arr);
    }
    return map;

}
const myMap = createMap(5, 5);
console.log(myMap);

const newField = new Field(myMap);