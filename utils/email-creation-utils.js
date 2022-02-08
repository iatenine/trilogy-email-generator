const fs = require("fs");
const { months } = require("../consts");
const { students, tutorName } = require("../data/student-list");
const subjectLinePrefix = "FSF Boot Camp - Tutorial Confirmation - ";

const createEmails = async (appts) => {
  await fs.mkdir("emails", { recursive: true }, (err) => {
    if (!err) console.log(`emails directory created`);
  });
  generateApptEmails(appts);
};

function generateApptEmails(apptList) {
  apptList.forEach((appt, index) => {
    const email = createEmail(
      months[appt[0]],
      appt[1],
      appt[2],
      appt[3],
      appt[4]
    );
    fs.writeFile(`./emails/email-${appt[2]}-${index}.txt`, email, (err) => {
      if (err) throw err;
      console.log(`${index} email created`);
    });
  });
}

function createEmail(month, day, studentName, hour, minute, year = 2022) {
  const myTime = new Date(year, month - 1, day, hour, minute, 0, 0);
  const { timeZone, zoomLink, locale } = students[studentName];
  if (!timeZone || !zoomLink || !locale) {
    throw new Error("Missing student data");
  }
  const apptStr = getApptString(myTime, timeZone, locale);

  return `
${subjectLinePrefix} ${apptStr}
-------------------------------------------------------------------

Hi ${studentName.split(" ")[0]}!

Thank you for scheduling your session with me. I am looking forward to our session on ${apptStr}.
If something comes up and the scheduled time will not work, let me know a minimum of 6 hours before the appointment time and we’ll figure something out.

This session will take place here: ${zoomLink ?? "<Tutor’s Zoom Link>"}

(If you have not used zoom before please join the meeting at least 15 minutes early because it may have you download and install some software.)

Again, all I need from you:
 *  Be on Tutors & Students Slack 5 minutes before your time slot.
 *  Make sure your computer/mic/internet connection are working.
 *  Make sure your workspace is quiet and free from interruptions.
 *  At the end of the session, I will provide you with a link to a 2 minute evaluation form that you are required to complete.


Slack or email me with any questions.  I’m looking forward to our meeting!
Please Reply All to this email so that I know you have seen it.

(CC Central Support on all tutor email by always using REPLY ALL).

Sincerely,
${tutorName} `;
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
