/* Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

If the student passed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

If the student failed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

Tips

Use the getAverage function to get the class average.
Use the getGrade function to get the student's grade.
Use string concatenation (+) to build the message.
Be careful with the punctuation and spaces in the message. */

function getAverage(scores) {
    let total = 0; // Переменная для хранения суммы оценок
    for (let i = 0; i < scores.length; i++) {
        total += scores[i] // Добавляем каждую оценку к общей сумме
    }
    return total / scores.length // Возвращаем среднее значение
}

function hasPassingGrade(score) {
    let grade = getGrade(score);
    if (grade !== "F") { // Проверка, не равна ли оценка "F"
        return true
    } else {
        return false
    }
}

function getGrade(score) {
    if (score === 100) {
        return 'A++'
    } else if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}


function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores)
    let grade = getGrade(studentScore)
    if (hasPassingGrade(studentScore)) {
        return 'Class average: ' + average + '. Your grade: ' + grade + '. You passed the course.'
    } else {
        return 'Class average: ' + average + '. Your grade: ' + grade + '. You failed the course.'
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));