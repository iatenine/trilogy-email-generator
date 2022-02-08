const studentService = require("./service/student-service");
const { mainMenu } = require("./menu/");
const { runMenu } = require("./utils/");
let running = true;

async function run() {
  const { option } = await runMenu(mainMenu);
  const wait = await runService(option);
  if (running) {
    run();
  }
}

async function runService(option) {
  switch (option) {
    case "Add Student":
      return await studentService.addStudent();
    case "editStudent":
      return await studentService.editStudent();
    case "Drop Student":
      return await studentService.dropStudent();
    case "Exit":
      running = false;
      break;
  }
}

run();
