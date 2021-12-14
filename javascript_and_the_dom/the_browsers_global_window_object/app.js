
const btnToggle = document.querySelector('.btn-toggle');
const btnCreate = document.querySelector('.btn-main');


buttonStyling.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const item = document.createElement('li');

    item.textContent = input.Value;
    input.value = '';
});


btnCreate.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');

    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
    } else {
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none';
    }
});