// 1: Set the text of the <h1> element

document.querySelector('h1').textContent = 'My To-Do List';


// 2: Set the color of the <h1> to a different color

document.querySelector('h1').style.color = "darkorange";


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const paragraph = document.getElementsByClassName('desc');
paragraph.innerHTML = "This is my To-Do List! Take a look, cuz Im soooo busy";


// 4: Set the class of the <ul> to 'list'

const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>

const ul  = document.querySelector('ul');
const newListItem = document.createElement('li');


// 6: Change all <input> elements from text fields to checkboxes




// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>




// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
