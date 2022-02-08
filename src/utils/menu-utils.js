const inquirer = require("inquirer");

async function runMenu(menu) {
  return await inquirer.prompt(menu);
}

module.exports = { runMenu };
