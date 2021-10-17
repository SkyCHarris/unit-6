

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

let html = `
    <h1>You got ${score} question(s) correct!</h1>
`

document.querySelector('main').innerHTML = html;


let questionsList = `
    <h1>You got these questions right:</h1>
    <ol>
        <li>${correctQuestions}</li>
    </ol>
    <h1>You got these questions wrong:</h1>
    <ol>
        <li>${incorrectQuestions}</li>
    </ol>
`   

document.querySelector('main').innerHTML = questionsList;




// Use loop to cycle through each question, 
// present it to the user,
// and compare the response from the user to the answer in the array

// Use prompt method to ask questions, 
// and conditional statement to check if user answer matches the correct answer


// Practice

// const colorsQuiz = [
//     ['What color is the sky?', 'Blue'],
//     ['What color are trees?', 'Green'],
//     ['What color is the sun?', 'Yellow']
// ]

// let score = 0;

// for ( let i = 0; i < colorsQuiz.length; i++ ) {
//     let quizQuestions = colorsQuiz[i][0];
//     let quizAnswers = colorsQuiz[i][1];
//     let quizResponse = prompt(colorsQuiz);
// }

// if ( quizResponse = quizAnswers) {
//     score++;
//     console.log(score);
// }

// html = 
// `<h1>You got ${score} question(s) correct!</h1>`

// document.querySelector('main').innerHTML = html;