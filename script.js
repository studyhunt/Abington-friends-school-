/* -------------------------
   DEMO STUDENT DATA
-------------------------- */

const students = {

  STU001: {
    name: "Rahul Kumar",
    className: "10-A",
    attendance: "92%",

    results: {
      Mathematics: 88,
      Science: 91,
      English: 85,
      Hindi: 90
    }
  },

  STU002: {
    name: "Priya Singh",
    className: "10-A",
    attendance: "95%",

    results: {
      Mathematics: 94,
      Science: 89,
      English: 92,
      Hindi: 96
    }
  }

};


/* -------------------------
   DEMO NOTICES
-------------------------- */

let notices = [

  {
    title: "Annual Examination",
    text: "Annual examination schedule will be announced soon.",
    date: "26 September 2026"
  },

  {
    title: "Parent-Teacher Meeting",
    text: "Parents are requested to attend the upcoming PTM.",
    date: "15 October 2026"
  }

];


/* -------------------------
   EVENTS
-------------------------- */

let events = [

  {
    title: "Parent-Teacher Meeting",
    date: "2026-10-15"
  },

  {
    title: "Annual Function",
    date: "2026-12-10"
  },

  {
    title: "Sports Day",
    date: "2026-12-20"
  }

];


let loginType = "student";


/* -------------------------
   LOGIN TYPE
-------------------------- */

function selectLogin(type) {

  loginType = type;

  document
    .getElementById("studentTab")
    .classList.toggle(
      "active",
      type === "student"
    );

  document
    .getElementById("adminTab")
    .classList.toggle(
      "active",
      type === "admin"
    );

}


/* -------------------------
   LOGIN
-------------------------- */

function login() {

  const username =
    document
      .getElementById("username")
      .value
      .trim();

  const password =
    document
      .getElementById("password")
      .value
      .trim();

  const message =
    document.getElementById("loginMessage");


  /* STUDENT LOGIN */

  if (loginType === "student") {

    const student =
      students[username.toUpperCase()];

    if (
      student &&
      password === "1234"
    ) {

      document
        .getElementById("loginPage")
        .classList.add("hidden");

      document
        .getElementById("studentDashboard")
        .classList.remove("hidden");

      loadStudent(
        username.toUpperCase()
      );

      return;
    }

  }


  /* ADMIN LOGIN */

  if (
    loginType === "admin" &&
    username === "admin" &&
    password === "admin123"
  ) {

    document
      .getElementById("loginPage")
      .classList.add("hidden");

    document
      .getElementById("adminDashboard")
      .classList.remove("hidden");

    loadAdmin();

    return;
  }


  message.textContent =
    "Invalid ID/username or password.";

}


/* -------------------------
   STUDENT DASHBOARD
-------------------------- */

function loadStudent(id) {

  const student = students[id];

  document
    .getElementById("studentWelcome")
    .textContent =
    "Welcome, " + student.name + "!";

  document
    .getElementById("attendanceValue")
    .textContent =
    student.attendance;

  document
    .getElementById("studentClass")
    .textContent =
    student.className;

  document
    .getElementById("studentId")
    .textContent =
    id;


  /* RESULTS */

  let resultHTML = `
    <table class="result-table">

      <tr>
        <th>Subject</th>
        <th>Marks</th>
      </tr>
  `;

  let total = 0;

  for (
    const subject in student.results
  ) {

    const marks =
      student.results[subject];

    total += marks;

    resultHTML += `
      <tr>
        <td>${subject}</td>
        <td><strong>${marks}</strong></td>
      </tr>
    `;
  }

  const percentage =
    (total / 400 * 100).toFixed(2);

  resultHTML += `
      <tr>
        <th>Total</th>
        <th>${total}/400</th>
      </tr>

      <tr>
        <th>Percentage</th>
        <th>${percentage}%</th>
      </tr>

    </table>
  `;

  document
    .getElementById("studentResult")
    .innerHTML = resultHTML;


  renderNotices(
    "studentNotices"
  );

  renderEvents(
    "studentCalendar"
  );

}


/* -------------------------
   NOTICE RENDER
-------------------------- */

function renderNotices(elementId) {

  const box =
    document.getElementById(elementId);

  box.innerHTML = "";

  notices.forEach(notice => {

    box.innerHTML += `
      <div class="notice">

        <h3>
          ${notice.title}
        </h3>

        <p>
          ${notice.text}
        </p>

        <small>
          ${notice.date}
        </small>

      </div>
    `;

  });

}


/* -------------------------
   EVENT RENDER
-------------------------- */

function renderEvents(elementId) {

  const box =
    document.getElementById(elementId);

  box.innerHTML = "";

  events.forEach(event => {

    box.innerHTML += `
      <div class="calendar-item">

        <strong>
          ${event.date}
        </strong>

        <span>
          ${event.title}
        </span>

      </div>
    `;

  });

}


/* -------------------------
   ADMIN
-------------------------- */

function loadAdmin() {

  renderNotices("adminNotices");

  renderEvents("adminEvents");

}


/* -------------------------
   ADD NOTICE
-------------------------- */

function addNotice() {

  const title =
    document
      .getElementById("noticeTitle")
      .value
      .trim();

  const text =
    document
      .getElementById("noticeText")
      .value
      .trim();


  if (!title || !text) {

    alert("Please enter notice details.");

    return;
  }


  notices.unshift({

    title: title,

    text: text,

    date: new Date()
      .toLocaleDateString()

  });


  document
    .getElementById("noticeTitle")
    .value = "";

  document
    .getElementById("noticeText")
    .value = "";


  renderNotices("adminNotices");

  alert("Notice added!");
}


/* -------------------------
   ADD EVENT
-------------------------- */

function addEvent() {

  const title =
    document
      .getElementById("eventTitle")
      .value
      .trim();

  const date =
    document
      .getElementById("eventDate")
      .value;


  if (!title || !date) {

    alert("Please enter event details.");

    return;
  }


  events.push({

    title: title,

    date: date

  });


  document
    .getElementById("eventTitle")
    .value = "";

  document
    .getElementById("eventDate")
    .value = "";


  renderEvents("adminEvents");

  alert("Event added!");
}


/* -------------------------
   LOGOUT
-------------------------- */

function logout() {

  document
    .getElementById("studentDashboard")
    .classList.add("hidden");

  document
    .getElementById("adminDashboard")
    .classList.add("hidden");

  document
    .getElementById("loginPage")
    .classList.remove("hidden");

  document
    .getElementById("username")
    .value = "";

  document
    .getElementById("password")
    .value = "";

}


/* DEFAULT */

selectLogin("student");
