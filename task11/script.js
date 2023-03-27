// fetch('https://reqres.in/api/users')
// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
//-----------------------------------

/*
const request = new XMLHttpRequest();
request.open('GET','https://animechan.vercel.app/api/random');
request.send();
console.log(request.responseText);

request.addEventListener('load', function() {
    console.log(this.responseText);
});
*/

//-------------------------------------
/*
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))
*/

    //https://api.catboys.com/ping

    fetch('https://api.catboys.com/ping')
    .then(response => response.json())
    .then(quote => console.log(quote))