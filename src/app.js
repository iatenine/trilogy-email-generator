const { createEmails } = require("./utils/email-creation-utils");
const { run } = require("./service/main-service");

const appts = [
  // "Create appt for Jane Doe on 2022-03-18 at 14:30 (24 hour format required)",
  ["FEB", 10, "John Doe", 18, 0],
];

createEmails(appts);

// run();
