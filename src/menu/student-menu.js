const { timeZones, locales } = require("../consts");

// create student menu
// drop student menu
// edit student menu

const addStudentMenu = () => [
  {
    type: "text",
    name: "studentName",
    message: "Student's Name (first, last)",
  },
  {
    type: "list",
    name: "timeZone",
    message: "Select student's time zone",
    choices: Object.keys(timeZones),
  },
  {
    type: "text",
    name: "zoomLink",
    message: "Enter student's zoom link",
  },
  {
    type: "list",
    name: "locale",
    message: "Select student's locale",
    choices: Object.keys(locales),
  },
];

const editStudentMenu = () => [];

const dropStudentMenu = (students) => [
  {
    type: "list",
    name: "studentToDrop",
    message: "Select student to drop",
    choices: Object.keys(students),
  },
  {
    type: "confirm",
    name: "confirmDrop",
    message:
      "Are you sure you want to drop this student? (this cannot be undone)",
  },
];

const studentMenu = {
  addStudentMenu: addStudentMenu,
  editStudentMenu: editStudentMenu,
  dropStudentMenu: dropStudentMenu,
};

module.exports = {
  studentMenu,
};
