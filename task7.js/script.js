const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener('submit', (e) =>{
    let message = [];
    if(fname.value === '' || fname.value === null){
        message.push('Name is required');
    }

    if(message.length > 0){
    e.preventDefault();
    errorElement.innerHTML = message.join(',');0
    }
    console.log(fname);
})