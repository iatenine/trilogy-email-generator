const { mainMenu } = require("../menu/");
const { runMenu } = require("../utils/");
const studentService = require("./student-service");
const appointmentService = require("./appointment-service");

async function run() {
  const { option } = await runMenu(mainMenu);
  if (await runService(option)) run();
}

async function runService(option) {
  switch (option) {
    case "Add Appointment":
      await appointmentService.addAppointment();
      return true;
    case "Drop Appointment":
      await appointmentService.dropAppointment();
      return true;
    case "Generate Emails":
      await appointmentService.generateEmails();
      return true;
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
