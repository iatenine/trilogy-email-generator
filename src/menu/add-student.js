const inquirer = require("inquirer");
const { timeZones, locales } = require("../consts");

const mainArray = [
  "Generate Emails",
  "Add Student",
  "Edit Student",
  "Drop Student",
  "Exit",
];

const mainMenu = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: mainArray,
  },
];

const studentMenu = [
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

async function runMenu() {
  return await inquirer.prompt(studentMenu);
}

module.exports = { runMenu };
