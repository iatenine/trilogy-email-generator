const mainArray = [
  //   "Generate Emails",
  "Add Student",
  //   "Edit Student",
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

module.exports = { mainArray, mainMenu };
