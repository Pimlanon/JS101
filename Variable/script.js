// Create function run
function run(){
    var fruit = "banana"; // Variable var
    let food = "noodle"; // Variable let

    console.log(fruit, food); // Show fruit and food
    // Scope
    {
        var moo = "Mooo"; // Variable var in scope
        let honey = "bee"; // Variable let in scope
        console.log(moo, honey); // Show moo and honey
    }
    console.log(moo); // Show moo 
    console.log(honey); // Show honey Error not defined

    const myConst = 0.5; // Variable const
    console.log(myConst); // show myConst
    myConst = 1; // Change value to 1
    console.log(myConst); // show myConst Error 
}

// Call Functiom run
run();