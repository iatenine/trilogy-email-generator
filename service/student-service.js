const { students, tutorName } = require("../data/student-list");
const { writeFile } = require("../utils/file-utils");

function addStudent() {
  const filecontents = `const tutorName = "${tutorName}";
  const students = ${JSON.stringify(students)};
  
  module.exports = { students, tutorName };`;

  writeFile("./data/student-list.js", filecontents);
  console.log("Called create appt function");
}

function editStudent() {
  console.log("editing");
}

function dropStudent() {
  console.log("dropping");
}

module.exports = {
  addStudent,
  editStudent,
  dropStudent,
};
