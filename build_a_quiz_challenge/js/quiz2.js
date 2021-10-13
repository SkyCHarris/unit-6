
// #1
const cynthiaQuiz = [
    ['Who is the prettiest girl in the world?', 'Cynthia.'],
    ['What makes her the prettiest girl in the world?', 'Everything.'],
    ['What are we gonna do about it?', 'Wife it up.']
]

// #2
let score = 0;


// #3

// for ( let i = 0; i < cynthiaQuiz.length; i++ ) {
//     const whoPretty = prompt(cynthiaQuiz[0][0]);
//     if ( whoPretty == "Cynthia" ) {
//         score++;
//     } else {
//         score;
//     }
//     const whyPretty = prompt(cynthiaQuiz[1][0]);
//     if ( whyPretty == "Everything") {
//         score++;
//     } else {
//         score;
//     }
//     console.log(score);
// }


for ( let i = 0; i < cynthiaQuiz.length;i++ ) {
    let prettyQuestions = cynthiaQuiz[i][0];
    let prettyAnswers = cynthiaQuiz[i][1];
    let response = prompt(prettyQuestions);

    if ( response == prettyAnswers ) {
        score++;
    } else {
        score;
    }
}








// for ( let i = 0; i < cynthiaQuiz.length; i++) {
//     let score = 0;
//     const whoPretty = prompt(cynthiaQuiz[0][0]);
//     if ( whoPretty == 'Cynthia') {
//         score++;
//     } else {
//         score;
//     }
//     console.log(score);
// }


// Use loop to cycle through each question, 
// present it to the user,
// and compare the response from the user to the answer in the array

// Use prompt method to ask questions, 
// and conditional statement to check if user answer matches the correct answer