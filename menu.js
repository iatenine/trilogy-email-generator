const inquirer = require("inquirer");

const appts = [];

// Main menu
// -> Appointment Menu
// -> Student Menu
// -> Config Menu
// -> Exit
const menu = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: ["Add Appointment", "Generate Emails", "Cancel"],
  },
];

inquirer.prompt(menu).then((answers) => {
  switch (answers.menu) {
    case "Add Appointment":
      createAppointments();
      break;
    case "Generate Emails":
      viewAppointments();
      break;
    case "Cancel":
      console.log("Goodbye!");
      break;
  }
});

function createAppointment() {
  appts.push();
}
