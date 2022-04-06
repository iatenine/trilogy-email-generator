const { createEmails, runMenu } = require("../utils");
const { appointmentMenu } = require("../menu");

const apptList = [];

const getNewAppt = async () => {
  const newAppt = await runMenu(appointmentMenu.newApptMenu);
  const formattedAppt = [
    newAppt.month,
    newAppt.day,
    newAppt.student,
    newAppt.hour,
    newAppt.minute,
  ];
  return formattedAppt;
};

const addAppointment = async () => {
  const newAppt = await getNewAppt();
  apptList.push(newAppt);
  console.log("New appointment added: ", newAppt);
  console.log("Appointment list: ", apptList);
};

// dropAppointment
const dropAppointment = async () => {
  const apptToDrop = await runMenu(appointmentMenu.dropApptMenu(apptList));
  apptList.filter((appt) => {
    appt[0] !== apptToDrop[0] ||
      appt[1] !== apptToDrop[1] ||
      appt[2] !== apptToDrop[2] ||
      appt[3] !== apptToDrop[3] ||
      appt[4] !== apptToDrop[4];
  });
};

// generateEmails
const generateEmails = async () => {
  await createEmails(apptList);
};

module.exports = {
  addAppointment,
  dropAppointment,
  generateEmails,
};
