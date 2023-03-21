const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
console.log(gJavascript);
gJavascript.innerHTML = 'Advanced JAVASCRIPT!!';


const tryHere = document.querySelector('#reading-list li:nth-child(1) .delete');
console.log(tryHere);
tryHere.innerHTML = 'Advanced ';

//.textContent ใช้ได้เหมือน .innerHTML แต่ .innerHTML ใส่ tag ได้
const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list){
    list.innerHTML = ' | <i>book</i> <b>title : </b>' + list.textContent;
    //list.textContent = `book title: ${list.textContent}`; ใช้อันนี้ก็ได้
})
