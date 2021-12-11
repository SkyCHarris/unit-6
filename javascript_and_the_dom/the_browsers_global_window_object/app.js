
const btnToggle = document.querySelector('.btn-toggle');
const btnUpdate = document.querySelector('.btn-main');
const buttonStyling = document.querySelector('.btn-main');
// const listItems = document.querySelectorAll('li');
// const highlights = document.querySelectorAll('.highlight');


// for ( const highlight of highlights) {
//     highlight.style.backgroundColor = 'cornsilk';

//     console.log(highlight);
// }


// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'orchid';
// }

buttonStyling.addEventListener('click', () => {
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');
    
    headline.className = 'grow';
    headline.textContent = input.value;
    input.value = '';
});

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');

    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
    } else {
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none';
    }
});