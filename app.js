const { createEmails } = require("./utils/email-creation-utils");

const appts = [
  // ["Mar", 18, "Jane Doe", 14, 30],
  ["Feb", 8, "Katlyn Boches", 19, 0],
  ["Feb", 8, "John Damaso", 18, 0],
];

createEmails(appts);
