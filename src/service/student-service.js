const { students, tutorName } = require("../data/student-list");
const { addStudentMenu } = require("../menu/");
const { writeFile, runMenu } = require("../utils");
const { locales, timeZones } = require("../consts");

async function addStudent() {
  const { studentName, timeZone, zoomLink, locale } = await runMenu(
    addStudentMenu
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
  updateStudentListFile({ ...students, ...newStudent });
}

function editStudent() {
  console.log("editing");
}

function dropStudent() {
  console.log("dropping");
}

function updateStudentListFile(newStudentObj) {
  const filecontents = `const tutorName = "${tutorName}";
  const students = ${JSON.stringify(newStudentObj)};
  
  module.exports = { students, tutorName };`;
  writeFile("./src/data/student-list.js", filecontents);
}

module.exports = {
  addStudent,
  editStudent,
  dropStudent,
};
