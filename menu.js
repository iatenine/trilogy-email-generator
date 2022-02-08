const inquirer = require("inquirer");
const studentService = require("./service/student-service");
let running = true;

studentService.addStudent();

const menu = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      "Generate Emails",
      "Add Student",
      "Edit Student",
      "Drop Student",
      "Exit",
    ],
  },
];

function runMenu() {
  inquirer.prompt(menu).then((answers) => {
    switch (answers.menu) {
      case "Generate Emails":
        console.log("We'll get there");
        break;
      case "Add Student":
        studentService.addStudent();
        break;
      case "Edit Student":
        studentService.editStudent();
        break;
      case "Drop Student":
        studentService.dropStudent();
        break;
      case "Exit":
        running = false;
        break;
    }
    if (running == true) runMenu();
  });
}

// runMenu();
