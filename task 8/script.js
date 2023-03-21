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

console.log(----------------------);
//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

// //create element
// //add content


// //add classes​

// //append to DOM

});