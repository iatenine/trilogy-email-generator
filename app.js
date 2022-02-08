const { createEmails } = require("./utils/email-creation-utils");

const appts = [
  // "Create appt for Jane Doe on 2022-03-18 at 14:30 (24 hour format required)",
  // ["Mar", 18, "Jane Doe", 14, 30],
];

createEmails(appts);
