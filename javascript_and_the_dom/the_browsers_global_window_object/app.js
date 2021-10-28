const headline = document.getElementById('headline');
const buttonStyling = document.getElementById('btn-main');

headline.style.border = 'solid 2px red';
buttonStyling.addEventListener('click', () => {
    buttonStyling.style.border = 'solid 2px red'
});
