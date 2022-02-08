const fs = require("fs");

async function writeFile(filepath, contents) {
  fs.writeFile(filepath, contents, (err) => {
    if (err) throw err;
    console.log(`${filepath} created`);
  });
}

module.exports = { writeFile };
