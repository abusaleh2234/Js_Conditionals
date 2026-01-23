let marks = 50

function gradeCalculator(marks){
    if (marks < 59) {
        console.log("Grade is F");
    }
    if (marks >= 60 && marks <= 69) {
        console.log("Grade is D");
    }
    else if (marks >= 70 && marks <= 79) {
        console.log("Grade is C");
    }
    else if (marks >= 80 && marks <= 89) {
        console.log("Grade is B");
    }
    else if (marks >= 90 && marks <= 100) {
        console.log("Grade is A");
    }
    else {
        console.log("invalide ");
    }
}
// gradeCalculator(marks)


function calculateGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Example usage
let studentScore = 85;
console.log("Grade:", calculateGrade(studentScore));
