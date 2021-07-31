// 1. Create a multidimensional array to hold quiz questions and answers


const quiz = [
  ['Who is Skys dog?', 'Who is Cynthias dog?', 'Who are Tricia and Justins dogs?']
  ['Zara', 'Max', 'Denver and Tucker']
]

// 2. Store the number of questions answered correctly


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

function questions ( arr ) {
  let questionsCorrect = '';
  for ( let i = 0; i < arr.length; i++ ) {
    questionsCorrect += `${ arr[i] }`;
  }
      return questionsCorrect;
  }



// 4. Display the number of correct answers to the user