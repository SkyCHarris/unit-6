

const cynthiaQuiz = [
    ['Who is the prettiest girl in the world?', 'Cynthia'],
    ['What makes her the prettiest girl in the world?', 'Everything'],
    ['What are we gonna do about it?', 'Wife it up']
]


const correctQuestions = [];
const incorrectQuestions = [];

let score = 0;


for ( let i = 0; i < cynthiaQuiz.length; i++ ) {
    let prettyQuestions = cynthiaQuiz[i][0];
    let prettyAnswers = cynthiaQuiz[i][1];
    let response = prompt(prettyQuestions);

    if ( response == prettyAnswers ) {
        score++;
        console.log(score);
        correctQuestions.push(prettyQuestions);
    } else {
        incorrectQuestions.push(prettyQuestions)
    }
}

function createListItems(arr) {
    let items = '';
    for ( let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    } 
    return items;
}

let html = `
    <h1>You got ${score} question(s) correct!</h1>
    <h2>You got these questions right:</h2>
    <ol>${ createListItems(correctQuestions) }</ol>

    <h2>You got these questions wrong:</h2>
    <ol>${ createListItems(incorrectQuestions) }</ol>
`

document.querySelector('main').innerHTML = html;