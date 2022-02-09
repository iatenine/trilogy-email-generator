const { mainMenu } = require("../menu/");
const { runMenu } = require("../utils/");
const studentService = require("./student-service");

async function run() {
  const { option } = await runMenu(mainMenu);
  if (await runService(option)) run();
}

async function runService(option) {
  switch (option) {
    case "Add Student":
      await studentService.addStudent();
      return true;
    case "editStudent":
      await studentService.editStudent();
      return true;
    case "Drop Student":
      await studentService.dropStudent();
      return true;
    case "Exit":
      return false;
  }
}

module.exports = { run };
