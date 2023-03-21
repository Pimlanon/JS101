const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
console.log(gJavascript);
gJavascript.innerHTML = 'Advanced JAVASCRIPT!!';


const tryHere = document.querySelector('#reading-list li:nth-child(1) .delete');
console.log(tryHere);
tryHere.innerHTML = 'Advanced ';

//.textContent ใช้ได้เหมือน .innerHTML
const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list){
    list.innerHTML += ' book <b>title:</b> ';
})
