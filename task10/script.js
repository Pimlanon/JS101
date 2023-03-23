const promise = new Promise ((resolve, reject) => {
    let sum = 1+2;

    if (sum == 3){
        resolve ('Success');
    }else {
        reject ('Failed');
    }
})

promise.then((message) => {
    console.log('This is success resolve ' + message)
}).catch((message) => {
    console.log('This is error reject ' + message)
})