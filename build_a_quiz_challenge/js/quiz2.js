
// Array
const cynthiaQuiz = [
    ['Who is the prettiest girl in the world?', 'Cynthia.'],
    ['What makes her the prettiest girl in the world?', 'Everything.'],
    ['What are we gonna do about it?', 'Wife it up.']
]

const score;

// If else to 

// const whoPretty = prompt("Who's the prettiest girl in the world?");
// const whyPretty = prompt("What makes her the prettiest girl in the world?")
// const whatDo = prompt("What are we gonna do about it?")



for ( let i = 0; i < cynthiaQuiz.length; i++) {
    let score = 0;
    const whoPretty = prompt(cynthiaQuiz[0][0]);
    if ( whoPretty == 'Cynthia') {
        score++;
    } else {
        score;
    }
    console.log(score);
}


//     for ( let i = 0; i < cynthiaQuiz.length; i++ ) {
//         for ( let k = 0; k < cynthiaQuiz[0].length; k++) {
//             console.log(k);
//         }
//     }
// }




// Use loop to cycle through each question, 
// present it to the user,
// and compare the response from the user to the answer in the array

// Use prompt method to ask questions, 
// and conditional statement to check if user answer matches the correct answer