const mainMenu = {
  mainArray: [
    "Generate Emails",
    "Add Student",
    //   "Edit Student",
    "Drop Student",
    "Exit",
  ],

  mainMenu: [
    {
      type: "list",
      name: "option",
      message: "Select an option",
      choices: this.mainArray,
    },
  ],
};

module.exports = mainMenu;
