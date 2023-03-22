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
    //console.log(this.responseText); เช็คเฉยๆว่าข้อมูลขึ้นไหม

    //ข้อมูลตอนนี้ยังเป็น json เราต้องดึงออกมาให้มันเป็น obj โดยเราจะ convert มัน
    const [data] = JSON.parse(this.responseText);  //ใส่ [] คลุม data เพื่อทำการ de-structure ให้มันดูง่ายขึ้น
    console.log(data); //ข้อมูลทุกอย่างกลายเป็น 'OBJ' เกี่ยวกับ portugal แล้ว
});

//ข้อมูลตอนนี้ยังเป็น json เราต้องดึงออกมาให้มันเป็น obj เราจะ convert มัน