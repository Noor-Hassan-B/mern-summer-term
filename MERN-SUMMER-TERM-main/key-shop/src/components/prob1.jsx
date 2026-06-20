import React from 'react';
import './brob1.css';

const students = [
  { id: 1, name: 'Aman', marks: 85, attendance: 92 },
  { id: 2, name: 'Riya', marks: 38, attendance: 76 },
  { id: 3, name: 'Karan', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Raj', marks: 45, attendance: 60 },
  { id: 6, name: 'Neha', marks: 29, attendance: 95 }
];

const StudentPerformance = () => {
  // 1. filter() to find students who passed (marks >= 40)
  const passedStudents = students.filter(({ marks }) => marks >= 40);

  // 2 & 3. map() to generate new array with grades
  const studentReport = students.map(({ id, name, marks, attendance }) => {
    const grade = marks >= 80 ? 'A' : marks >= 60 ? 'B' : marks >= 40 ? 'C' : 'F';
    return { id, name, marks, attendance, grade };
  });

  // 4. reduce() for class average marks
  const average = students.reduce((sum, { marks }) => sum + marks, 0) / students.length;

  // 5. reduce() to find topper
  const topper = students.reduce((top, s) => s.marks > top.marks ? s : top);

  return (
    <div className="container">
      <h2>Class Summary</h2>
      <p>Average Marks: <strong>{average.toFixed(2)}</strong></p>
      <p>Topper: <strong>{topper.name}</strong> ({topper.marks} Marks)</p>

      <h2>Passed Students</h2>
      <ul>
        {passedStudents.map(({ id, name, marks }) => (
          <li key={id}>{name} ({marks} Marks)</li>
        ))}
      </ul>

      <h2>All Student Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentReport.map(({ id, name, marks, attendance, grade }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{marks}</td>
              <td>{attendance}%</td>
              <td>{grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPerformance;
