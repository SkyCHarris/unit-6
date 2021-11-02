const buttonStyling = document.querySelector('.btn-main');
const headline = document.getElementById('headline');
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
    headline.style.border = 'solid 2px red';
    headline.style.fontSize = '60px';
});
