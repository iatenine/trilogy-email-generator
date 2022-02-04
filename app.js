const { createEmails } = require("./utils");

const appts = [
  ["Mar", 18, "John Doe", 14, 0],
  ["Mar", 18, "Jane Doe", 14, 30],
];

createEmails(appts);
