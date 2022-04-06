const { timeZones, locales } = require("../consts");
const { students } = require("../data/student-list.js");

// create student menu
// drop student menu
// edit student menu

const addStudentMenu = [
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

const editStudentMenu = [
  {
    type: "list",
    name: "studentToEdit",
    message: "Select student to edit",
    choices: Object.keys(students),
  },
  {
    type: "list",
    name: "propertyToEdit",
    message: "Select property to edit",
    choices: ["name", "timeZone", "zoomLink", "locale"],
  },
  {
    type: "text",
    name: "newValue",
    message: "Enter new value",
  },
  {
    type: "confirm",
    name: "confirmUpdate",
    message: "Are you sure you want to update this student?",
  },
];

const dropStudentMenu = [
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
