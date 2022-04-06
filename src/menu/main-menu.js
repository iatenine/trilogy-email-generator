const mainArray = [
  "Add Appointment",
  "Generate Emails",
  "Add Student",
  "Drop Student",
  "Exit",
];

const mainMenu = [
  {
    type: "list",
    name: "option",
    message: "Select an option",
    choices: mainArray,
  },
];

module.exports = { mainMenu };
