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

const dropApptMenu = (currentAppts) => {
  const apptChoices = currentAppts.map((appt) => {
    return `${appt.month} ${appt.day} ${appt.hour}:${appt.minute}`;
  });
  return [
    {
      type: "list",
      name: "apptToDrop",
      message: "Select appointment to drop",
      choices: apptChoices,
    },
    {
      type: "confirm",
      name: "confirmDrop",
      message:
        "Are you sure you want to drop this appointment? (this cannot be undone)",
    },
  ];
};

module.exports = { newApptMenu, dropApptMenu };
