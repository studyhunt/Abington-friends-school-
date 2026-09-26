const students = {
  "STU001": {
    name: "Rahul Kumar",
    className: "10-A",
    attendance: "92%",
    maths: 88,
    science: 91,
    english: 85,
    hindi: 90
  },

  "STU002": {
    name: "Priya Singh",
    className: "10-A",
    attendance: "95%",
    maths: 94,
    science: 89,
    english: 92,
    hindi: 96
  }
};


function checkAttendance() {

  const id = document
    .getElementById("attendanceId")
    .value
    .trim()
    .toUpperCase();

  const result = document.getElementById("attendanceResult");

  if (!students[id]) {
    result.innerHTML = `
      <p style="color:red;">
        Student ID not found.
      </p>
    `;
    return;
  }

  const student = students[id];

  result.innerHTML = `
    <div class="card">
      <h3>${student.name}</h3>
      <p>Class: ${student.className}</p>
      <h2 style="color:#16a34a;">
        Attendance: ${student.attendance}
      </h2>
    </div>
  `;
}


function checkResult() {

  const id = document
    .getElementById("resultId")
    .value
    .trim()
    .toUpperCase();

  const resultBox = document.getElementById("resultBox");

  if (!students[id]) {
    resultBox.innerHTML = `
      <p style="color:red;">
        Student ID not found.
      </p>
    `;
    return;
  }

  const student = students[id];

  const total =
    student.maths +
    student.science +
    student.english +
    student.hindi;

  const percentage = (total / 400 * 100).toFixed(2);

  resultBox.innerHTML = `
    <div class="card">
      <h3>${student.name}</h3>
      <p>Class: ${student.className}</p>

      <hr><br>

      <p>Mathematics: <strong>${student.maths}</strong></p>
      <p>Science: <strong>${student.science}</strong></p>
      <p>English: <strong>${student.english}</strong></p>
      <p>Hindi: <strong>${student.hindi}</strong></p>

      <br>

      <h3>
        Percentage: ${percentage}%
      </h3>
    </div>
  `;
}


function showStudent() {
  document
    .getElementById("student-id")
    .scrollIntoView({
      behavior: "smooth"
    });
    }
