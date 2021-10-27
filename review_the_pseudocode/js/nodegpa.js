
const main = document.querySelector('main');

function calculate_gpa(student_grades) {
    let grade_total = 0;
    let num_of_grades = student_grades.length;
    for ( let i = 0; i < num_of_grades.length; i++ ) {
        let grade = student_grades[i];
        if ( grade < 1 || grade > 4 ) {
            console.log("invalid grade" + grade);
            return("can't complete calculation");
        } else {
            grade_total += student_grades[i];
        }
    }
    const gpa = grade_total / num_of_grades;
    return gpa;
}

let reggie_grades = [ 4, -2, 3, 4 ];
console.log(calculate_gpa(reggie_grades));

let dave_grades = [ 1, 2, 3, 2 ];
console.log(calculate_gpa(dave_grades));
