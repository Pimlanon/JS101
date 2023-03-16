let myCar = {
    make : 'Benz',
    made : 'EZ20',
    year : 2000,
    drive : function () {
        console.log('Driving car');
    }
};
console.log(myCar);
console.log(myCar.make);
console.log(myCar['made']);


console.log('-----------------------------');

let cookie = function (make, topping, piece){
    this.make = make;
    this.topping = topping;
    this.piece = piece;
    this.eater = function(name){
        console.log(`${name} is eating cookies `);
    };
    
};

let myCookie = new cookie('four', 'mint-choc', 10);
console.log(myCookie);
myCookie.eater('Jack');

let myCookie1 = new cookie('oat', 'banana', 20);
    console.log(myCookie1);
    myCookie.eater('Jill');