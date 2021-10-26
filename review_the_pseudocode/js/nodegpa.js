





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

print(calculate_gpa.reggie_grades(4, 4, 3, 4));
print(calculate_gpa.dave_grades(1, 2, 3, 2));