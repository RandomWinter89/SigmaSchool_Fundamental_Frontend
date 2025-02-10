const students = [];

function addStudent() {
    const student = prompt('Enter a new student: ');
    if (student === null || student.trim().length == 0)
        return alert("No empty space/Cancelled");

    const grade = parseInt(prompt("Enter the student's grade: "));
    if (isNaN(grade) || grade < 0)
        return alert("Unknown value / Negative score. ");

    const studentForm = {
        name: student,
        grade: grade,
    };
    students.push(studentForm);

    alert('Student added!');
}

function viewStudent() {
  let studentList = 'Students List:\n';

  if (students.length <= 0)
    return alert("Empty student");

  for (let i = 0; i < students.length; ++i) {
    studentList += `${i + 1}. ${students[i].name}: ${students[i].grade}\n`;
  }

  alert(studentList);
}

function removeStudent() {
    let id = parseInt(prompt("Specified the index to remove student from the list: "));
    id--;

    if (isNaN(id) || id === -1)
        return;

    alert(`Student ${students[id].name} has been removed from the list`);
    students.splice(id, 1);
}

function modifyStudent() {
    const id = parseInt(prompt("Specified the index to modify student's grade from the list: "));
    id--;

    if (isNaN(id) || (id === -1))
        return;

    const newGrade = parseInt(prompt("Modify student grade: "));

    if (isNaN(newGrade) || newGrade < 0)
        return alert("Don't provide negative value or string");

    students[id].grade = newGrade;

    alert(`Index ${students[id].name}'s grade has been modified`);
}