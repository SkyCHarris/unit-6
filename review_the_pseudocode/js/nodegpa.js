


function calculate_gpa(student_grades) {
    let grade_total = 0;
    for ( let i = 0; i < student_grades.length; i++ ) {
        if ( grade !== 1 || 2 || 3 || 4 ) {
            print("invalid grade");
            print(grade);
            return("can't complete calculation");
        } else {
            grade += grade_total;
        }
    }
    let gpa = grade_total / grade;
    return gpa;
}

let reggieGPA = calculate_gpa.reggie_grades;
let daveGPA = calculate_gpa.dave_grades;

document.write('main').innerHTML = reggieGPA;
document.write('main').innerHTML = daveGPA;