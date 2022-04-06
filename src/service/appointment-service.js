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
  console.log("Current appointments: ", apptList);
  const newAppt = await getNewAppt();
  apptList.push(newAppt);
  console.log(
    `You now have ${apptList.length} appointment${
      apptList.length > 1 || apptList.length === 0 ? "s" : ""
    }`
  );
  apptList.forEach((appt, i) => {
    const studentName = appt[2];
    const month = appt[0];
    const day = appt[1];
    const hour = appt[3];

    console.log(`${i + 1}. ${studentName} - ${day} ${month}`);
  });
  console.log("");
};

// generateEmails
const generateEmails = async () => {
  await createEmails(apptList);
  console.log(`Email directory populated with ${apptList.length} appointments`);
};

module.exports = {
  addAppointment,
  generateEmails,
};
