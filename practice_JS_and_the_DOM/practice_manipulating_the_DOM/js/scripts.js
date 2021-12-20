// 1: Set the text of the <h1> element

document.querySelector('h1').textContent = 'My To-Do List';


// 2: Set the color of the <h1> to a different color

document.querySelector('h1').style.color = "darkorange";


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const paragraph = document.querySelector('.desc');
paragraph.innerHTML = "<a href>This is my To-Do List! Take a look, cuz Im soooo busy.</a>";


// 4: Set the class of the <ul> to 'list'

const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>

const newListItem = document.createElement('li');
newListItem.innerHTML = "<input> Play with doggo!";

list.appendChild(newListItem);


// 6: Change all <input> elements from text fields to checkboxes


const textFields = document.getElementsByTagName('input');

for (let i=0; i<textFields.length; i++) {
    textFields[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

const createButton = document.createElement('button');

createButton.textContent = 'Delete';



// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
