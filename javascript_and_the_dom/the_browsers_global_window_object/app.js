const headline = document.getElementById('headline');
const buttonStyling = document.getElementById('btn-main');
const listItems = document.getElementsByTagName('li');
const highlights = document.getElementsByClassName('highlight');


for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'orchid';
}

buttonStyling.addEventListener('click', () => {
    headline.style.border = 'solid 2px red';
    headline.style.fontSize = '60px';
});
