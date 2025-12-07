function gradeCalculator() {

    let mark1 = Number(prompt("Enter mark for English(0-100):"))
    let mark2 = Number(prompt("Enter mark for Computer Science(0-100):"))
    let mark3 = Number(prompt("Enter mark for Social Studies(0-100):"))
    let mark4 = Number(prompt("Enter mark for Chemistry(0-100):"))
    let mark5 = Number(prompt("Enter mark for Maths(0-100):"))

    let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5
    let Average = totalMarks / 5
    let grade

    if (Average >= 90) { 
        grade = "A+" }
    else if (Average >= 80) { 
        grade = "A" }
    else if (Average >= 70) { 
        grade = "B" }
    else if (Average >= 60) { 
        grade = "C" }
    else if (Average >= 50) { 
        grade = "D" }
    else { 
        grade = "F" }

    alert(
        "Total Marks: " + totalMarks +
        "\nAverage: " + Average +
        "\nGrade: " + grade
    )
}