// const promise = new Promise ((resolve, reject) => {
//     let sum = 1+2;

//     if (sum == 3){
//         resolve ('Success');
//     }else {
//         reject ('Failed');
//     }
// })

// promise.then((message) => {
//     console.log('This is success resolve ' + message)
// }).catch((message) => {
//     console.log('This is error reject ' + message)
// })

//////////////////////////////////////////////////////////////////////
// const failed = true;

// const myPromise = new Promise((resolve, reject) => { 
//     if(failed)
//         reject('fail promise');
//     else
//         resolve('resolved!!')
// });

// function success(result){
//     console.log(result);
// }

// function onFailed(error){
//     console.log(error);
// }

// myPromise.then((result) => success(result))
// .catch((error) => onFailed(error));

////////////////////////////////////////////////////////////////////////
let stocks =  {
    coffee: [ "cappuccino", "latte" ,"mocha"],
    liquid: ["hot","ice","milk"],
    cup:["small","midium","large"],
    topping:["chocolate", "milk"]         
};

let is_shop_open = true; //1. is the shop open


let order = (time, work) =>{ // work and time 2. customer order

    return new Promise((resolve, reject) =>{ // 3. we promise customer
        if (is_shop_open){

            setTimeout(() =>{ 
                resolve(work ())
            },time)  //now we have work and time

        }else {
            reject(console.log('the shop is closed'));
        }
    });
}

order(2000, () => console.log(`${stocks.coffee[1]} was selected`)) // 1. place order 2 second

.then(()=>{ //no ; before then
    return order(0000,()=>console.log('started making coffee')); //need to return 2. production started 0 seconds
})

.then(() =>{
    return order(2000,()=>console.log('coffee bean in process')); //need to return 3. 
})

.then(()=>{
    return order(2000,()=>console.log(`${stocks.liquid[2]} and ${stocks.liquid[1]} were selected`)); //need to return 4. water and ice was selected
})

.then(()=>{
    return order(1000, () => console.log('coffee mixed'))
})

.then(() =>{
    return order(2000,()=>console.log(`${stocks.cup[2]}`));
})

.then(() =>{
    return order(3000,()=>console.log(`${stocks.topping[0]} was selected`));
})

.then(() =>{
    return order(1000,()=>console.log('coffee was served'));
})

.then(() => {
    return order(4000,()=>console.log('plese purchase at the cashier'));
})

.catch(()=>{
    console.log('customer left');
})

.finally(()=>{
    console.log('the shop is closed');
});