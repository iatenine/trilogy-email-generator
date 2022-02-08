const { createEmails } = require("./email-creation-utils");
const { writeFile } = require("./file-utils");
const { runMenu } = require("./menu-utils");

module.exports = { createEmails, writeFile, runMenu };
