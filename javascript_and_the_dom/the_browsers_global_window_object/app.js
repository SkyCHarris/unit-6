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

    headline.textContent = input.value;
    input.value = '';
});
