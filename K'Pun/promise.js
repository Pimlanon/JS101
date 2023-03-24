const prom = (params) => {
    return new Promise((resolve, reject) => {
      if(params === true) {
        resolve('Hello World')
      } else {
        reject('Error')
      }
    })
  }
  
  const handleSuccess = (data) => {
    console.log(data)
  }
  
  const handleFailure = (data) => {
    console.log('this is fail')
    console.log(data)
  }
  
  // then รับ params 2 ตัว คือ
  // 1 รับ resolve
  // 2 รับ reject
  //prom(false).then(handleSuccess, handleFailure)

  //เหมือน23 แจ่คนส่วนใหญ่ใช่อันนี้มากกว่า
  prom(false).then(handleSuccess).catch(handleFailure)
  