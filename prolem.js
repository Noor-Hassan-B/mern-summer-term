const students = [
    { id: 1, name: "Aman", marks: 85, attendance: 92 },
    { id: 2, name: "Riya", marks: 38, attendance: 76 },
    { id: 3, name: "Karan", marks: 67, attendance: 81 },
    { id: 4, name: "Simran", marks: 91, attendance: 88 },
    { id: 5, name: "Raj", marks: 45, attendance: 60 },
    { id: 6, name: "Neha", marks: 29, attendance: 95 }
];

const passedStudents = students.filter(student => student.marks >= 40);

console.log("Passed Students:");

for (let i = 0; i < passedStudents.length; i++) {
    console.log(`Name: ${passedStudents[i].name}`);
}

const studentReport = students.map(student => {

    const { name, marks, attendance } = student;

    let grade = "";

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "F";
    }

    return {
        name,
        marks,
        attendance,
        grade
    };
});

console.log("\nStudent Report:");

studentReport.forEach(student => {
    console.log(
        `Name: ${student.name}, Marks: ${student.marks}, Attendance: ${student.attendance}, Grade: ${student.grade}`
    );
});

const averageMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0) / students.length;

console.log(`\nClass Average Marks: ${averageMarks.toFixed(2)}`);

const topper = students.reduce((top, student) => {
    if (student.marks > top.marks) {
        return student;
    }
    return top;
});

console.log(`\nTopper: ${topper.name} (${topper.marks})`);