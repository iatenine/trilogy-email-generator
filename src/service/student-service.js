const { tutorName } = require("../data/student-list");
let { students } = require("../data/student-list");
const { studentMenu } = require("../menu");
const { writeFile, runMenu } = require("../utils");
const { locales, timeZones } = require("../consts");

async function addStudent() {
  const { studentName, timeZone, zoomLink, locale } = await runMenu(
    studentMenu.addStudentMenu
  );
  const newStudent = {
    // Use student name as key
    [studentName]: {
      timeZone: timeZones[timeZone],
      zoomLink,
      locale: locales[locale],
    },
  };
  console.log("Adding ", studentName, "to roster");
  students = { ...students, ...newStudent };
  updateStudentListFile(students);
}

async function dropStudent() {
  const { studentToDrop, confirmDrop } = await runMenu(dropStudentMenu);
  if (confirmDrop) {
    console.log("Dropping ", studentToDrop);
    delete students[studentToDrop];
    updateStudentListFile(students);
  } else {
    console.log("Cancelled drop");
  }
}

function updateStudentListFile(newStudentObj) {
  const filecontents = `const tutorName = "${tutorName}";
  const students = ${JSON.stringify(newStudentObj)};
  
  module.exports = { students, tutorName };`;
  writeFile("./src/data/student-list.js", filecontents);
}

module.exports = {
  addStudent,
  dropStudent,
};
