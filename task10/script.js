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
/*

//ร้านกาแฟ ใช้ได้
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
*/

//------------------------
/*
async function asyncFunction() {
    return 'Hello World'
  }

  //เขียน async ด้านบนเป็น promise
function asyncFunction() {
    return new Promise ((resolve) => {
        resolve ('Hello World')
    })
}
*/
//-----------------------

/*
//ใช้ได้ ของคุณปัน
async function showering () {
    let action1 = await sraphom() //action 1 มารับค่า ที่resolve มาจาก brushTeeth()[promise]
    let action2 = await brushTeeth()   // action 2 มารับค่า ที่resolve มาจาก sraphom()[promise]

    console.log(action1 + ' ' + action2)
}

async function sraphom () { //resolve value = sraphom
    return 'sraphom'
}

async function brushTeeth () { //resolve value = brushTeetn
    return 'brushTeeth' 
}

showering(); //sraphom brushTeeth  มันเรียงลำดับตามใส่ด้านบน
*/

//------------

//note: return ของ async function จะกลายเป็น resolve ของ promise
//ก็คือ return ตัวไหน resolve ตัวนั้น

/*
async function sraphom(action) {
    return  action + ' ' + 'sraphom' //ค่า resolve = action + ' ' + 'sraphom' 
  }
  
  async function brushTeeth() {
    return 'brushteeth' //ค่า resolve = 'brushteeth'
  }
  
  async function showering() {
    // action 1 มารับค่า ที่resolve มาจาก brushTeeth()[promise]
    let action1 = await brushTeeth()
    // action 2 มารับค่า ที่resolve มาจาก sraphom()[promise]
    let action2 = await sraphom(action1)
  
    return action2
  }
  
  showering().then((resolve) => {
    console.log(resolve) //brushteeth sraphom
  })
  
 */ 

//------------------------------------
//ใช้ async ให้เหมือน promise โดยเขียน if else
async function brushTeeth(bool) {
    if (bool === true) {
      return 'brushteeth' // return เหมือน ค่า resolve
    } else {
      throw new Error('error จ้า') // throw error เหมือนค่า reject
    }
  }

  brushTeeth(false)
  .then((resolve) => {
    console.log(resolve)
  }) .catch((reject) => {
    console.log(reject)
  })