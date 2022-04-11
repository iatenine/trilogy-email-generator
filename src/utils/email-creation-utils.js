const { months, messages } = require("../consts");
const { students, tutorName } = require("../data/student-list");
const { writeFile } = require("./file-utils");
const subjectLinePrefix = "FSF Boot Camp - Tutorial Confirmation - ";

function createEmails(appts) {
  appts.forEach((appt, index) => {
    const email = generateEmailBody(
      months.getMonthValueByName(appt[0]),
      appt[1],
      appt[2],
      appt[3],
      appt[4]
    );

    const filename = `./emails/email-${appt[2]}-${index}.txt`;
    writeFile(filename, email);
  });
}

function generateEmailBody(month, day, studentName, hour, minute, year = 2022) {
  const myTime = new Date(year, month - 1, day, hour, minute, 0, 0);
  const { timeZone, zoomLink, locale } = students[studentName];
  if (!timeZone || !zoomLink || !locale) {
    throw new Error("Missing student data");
  }
  const apptStr = getApptString(myTime, timeZone, locale);

  return messages.generateEmail(
    subjectLinePrefix,
    apptStr,
    studentName,
    zoomLink,
    tutorName
  );
}

function getApptString(date, timezone, locale) {
  // Assert date is valid
  if (!date.getMonth()) {
    throw new Error("Invalid date");
  }
  return date.toLocaleString(locale, {
    timeZone: timezone,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
}

module.exports = {
  createEmails,
};
