// RENAME THIS FILE TO student-list.js
// tutorName will be used to generate a signature, only include last name if you wish it added to the bottom of your email
const tutorName = undefined;

// Student names should be used as keys
// each student should have the following properties:
//   timeZone: timezone of student (e.g. 'America/Chicago', 'Australia/Perth')
//   zoomLink: link to student's zoom account
//   locale: locale of student (en-US, en-AU, en-GB etc.)
const students = {
  "John Doe": {
    timeZone: "America/Chicago",
    zoomLink: "example.com",
    locale: "en-US",
  },
  "Jane Doe": {
    timeZone: "Europe/Berlin",
    zoomLink: "example.com",
    locale: "de-DE",
  },
};

module.exports = { students, tutorName };
