const { students, tutorName } = require("../data/student-list");
const { writeFile } = require("../utils/file-utils");
const { runMenu } = require("../menu/add-student");
const { locales, timeZones } = require("../consts");

async function addStudent() {
  const { studentName, timeZone, zoomLink, locale } = await runMenu();
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
  writeFile("./data/student-list.js", filecontents);
}

module.exports = {
  addStudent,
  editStudent,
  dropStudent,
};
