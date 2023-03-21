// const form = document.querySelector('#add-list');
// const input = document.querySelector('#add-list input');
// const list = document.querySelector('#reading-list ul');

// //for putting value in the box to create new card
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // prevent the form from submitting and refreshing the page
//     if (input.value.trim() === '') {
//         alert('Please enter a value before adding to the list.');
//     } else {
//         const newList = document.createElement('li');
//         const newName = document.createElement('span');
//         const newDelete = document.createElement('span');
//         newName.textContent = input.value;
//         newDelete.textContent = 'delete';
//         newName.classList.add('name');
//         newDelete.classList.add('delete');
//         newList.appendChild(newName);
//         newList.appendChild(newDelete);
//         list.appendChild(newList);
//       input.value = ''; // clear the input field
//     }
//     });

//     list.addEventListener('click', (e) => {
//         if (e.target.className === 'delete') {
//             const li = e.target.parentElement;
//             const confirmDelete = confirm('Are you sure you want to delete this from your reading list?');
//             if (confirmDelete) {
//                 list.removeChild(li);
//             }
//         }
//     });


//short version
// const form = document.querySelector('#add-list');
// const input = document.querySelector('#add-list input');
// const list = document.querySelector('#reading-list ul');
// const searchForm = document.querySelector('#search-list');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (!input.value.trim()) {
//         alert('Please enter a value before adding to the list.');
//     } else {
//         list.insertAdjacentHTML('beforeend', `<li><span class="name">${input.value}</span><span class="delete">delete</span></li>`);
//         input.value = '';
//     }
// });

// list.addEventListener('click', (e) => {
//     if (e.target.classList.contains('delete')) {
//         const li = e.target.parentElement;
//         if (confirm('Are you sure you want to delete this from your reading list?')) {
//             li.remove();
//         }
//     }
// });

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const query = e.target.querySelector('input').value.trim().toLowerCase();
//     list.querySelectorAll('li').forEach((li) => {
//         const name = li.querySelector('.name').textContent.trim().toLowerCase();
//         li.style.display = name.includes(query) || !query ? 'block' : 'none';
//     });
// });

//search form but in long-version
// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // prevent the form from submitting and refreshing the page
//     const query = e.target.querySelector('input').value.trim().toLowerCase(); // get the search query and normalize it
//     if (query === '') {
//         // if the query is empty, show all items in the list
//         list.querySelectorAll('li').forEach((li) => {
//             li.style.display = 'block';
//         });
//     } else {
//         // otherwise, hide items that don't match the query
//         list.querySelectorAll('li').forEach((li) => {
//             const name = li.querySelector('.name').textContent.trim().toLowerCase();
//             const isMatch = name.includes(query);
//             li.style.display = isMatch ? 'block' : 'none'; // update the display style based on whether there's a match
//         });
//     }
// });


//------------------------------------------------------------------

// const myChild = document.querySelector('#reading-list li:nth-child(2) .name');
// myChild.innerHTML = `Hi I come from javaScript,`;

// const readingList = document.querySelectorAll('#reading-list li .name');
// console.log(readingList);
// readingList.forEach(function(list){
//     list.textContent += 'book title: ';
// });



//-------------------------------------------------------------
//K.Plug
// //better way for element.addEventListener()
// const list = document.querySelector('#reading-list ul');
// // //Interacting with Form -- add readinglist
// const addForm = document.forms['add-list'];

// addForm.addEventListener('submit',function(e){
//     e.preventDefault(); // prevent from refresh
//     let value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
//     // console.log(value);

// // //create element
// const childEle = document.createElement('li');


// // //add content
// childEle.innerHTML = `<span class="name">${value}</span><span class="delete">delete</span>`;

// // //add classes

// // //append to DOM
// list.appendChild(childEle);

// addForm.querySelector('input[type="text"]').value = '';
// });

//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');
// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];

addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    let value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
    // console.log(value);

// //create element
const childEle = document.createElement('li');
const spanEle = document.createElement('span');
const delEle = document.createElement('span');

// //add content
spanEle.textContent = value;
delEle.textContent = 'delete';

// //add classes
spanEle.classList.add('name');
delEle.classList.add('delete');
delEle.setAttribute('onclick', 'delEle()');
// <li><span></span><span></span></li>
// //append to DOM
childEle.appendChild(spanEle); // <li><span>value-spanEle</span></li>
childEle.appendChild(delEle); // <li><span class="name">value-spanEle</span><span class="delete">delete</span></li>
list.appendChild(childEle); // <ul><li><span class="name">value-spanEle</span><span class="delete">delete</span></li></ul>

// Reset input Value
addForm.querySelector('input[type="text"]').value = ''; // ''
});

// Delete
function delEle() {
   liEle = event.target.parentNode;
   liEle.remove();
}

// Search
// Create Variable searchForm for assign form id search-list
const searchForm = document.forms['search-list'];
// Create function searchList
function searchList(){
    // Create Variable myList assign list parent(Line 37) element child li
    let myList = list.getElementsByTagName('li');
    // Create Variable mySpan assign null
    let mySpan = '';
    // Create Variable value assign value input search in searchForm
    let value = searchForm.querySelector('input[type="text"]').value;
    // Loop for Element li in myList
    for (i = 0; i < myList.length; i++) {
        // Create Variable mySpan assign All span 0 
        // [0]<span class="name">value-spanEle</span> // [1]<span class="delete">delete</span>
        mySpan = myList[i].getElementsByTagName('span')[0].innerText.toLowerCase();
        // If mySpan indexOf = value
        if(mySpan.indexOf(value.toLowerCase())){
            myList[i].style.display = "none"; // add style display ''
        }else{
            myList[i].style.display = ""; // add style display ''
        }
    }
}