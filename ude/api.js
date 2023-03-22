'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////

//https://restcountries.com/v2/
//https://restcountries.com/v2/name/portugal


//กำลัง open request
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portugal')
//ขั้นตอน sending
//this request will fetch the data in the backgroynd
request.send();
//when it is done, it will emit the load event
request.addEventListener('load', function() {
    console.log('this.responseText');
});