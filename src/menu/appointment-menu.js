const { months } = require("../consts");
const { students } = require("../data/student-list");

const newApptMenu = [
  {
    type: "list",
    name: "student",
    message: "Select a student",
    choices: Object.keys(students),
  },
  {
    type: "list",
    name: "month",
    message: "What month is the appointment?",
    choices: Object.keys(months.monthList),
  },
  {
    type: "number",
    name: "day",
    message: "What day of the month is the appointment?",
  },
  {
    type: "number",
    message: "Select hour (use your timezone and 24 hour format)",
    name: "hour",
    validate: (input) => {
      if (input < 0 || input > 23) {
        return "Please enter a valid hour";
      }
      return true;
    },
  },
  {
    type: "number",
    message: "Select minute (use your timezone)",
    name: "minute",
    validate: (input) => {
      if (input < 0 || input > 59) {
        return "Please enter a valid minute";
      }
      return true;
    },
    default: 0,
  },
];

module.exports = { newApptMenu };
