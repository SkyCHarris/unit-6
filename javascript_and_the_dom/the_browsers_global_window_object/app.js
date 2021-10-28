const headline = document.getElementById('headline');
const buttonStyling = document.getElementById('btn-main');
const listItems = document.getElementsByTagName('li');





buttonStyling.addEventListener('click', () => {
    headline.style.border = 'solid 2px red';
    headline.style.fontSize = '60px';
});
