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
const failed = true;

const myPromise = new Promise((resolve, reject) => { 
    if(failed)
        reject('fail promise');
    else
        resolve('resolved!!')
});

function success(result){
  console.log(result);
}

function onFailed(error){
  console.log(error);
}

myPromise.then((result) => success(result))
.catch((error) => onFailed(error));