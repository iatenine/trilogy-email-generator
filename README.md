# Trilogy Email Generator

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents

[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  
[License](#license)

# Description

Tool created to help automate the process of generating confirmation emails for Trilogy tutors.
Prevents time zone confusion by using your system's settings and adapting to the student's time zone
setting as defined in the student-list.js

# Installation

Simply clone the repository and run:
`npm i`
to install dependencies and run the CLI with
`npm run start`
in src/data/student-list.example.js, fill out the tutorName const with your name as you wish it to appear at the bottom of the generated emails
and rename the file to student-list.js before first usage. This file will be used to track your roster of students and can be modified manually
if necessary. You may wish to maitain the original copy of student-list.example.js as a reference. student-list.js is intentionally ignored by
git to prevent accidental exposure of students information

# Usage

From the CLI, you may add or drop students from your roster. This will be persisted on local files but requires an app restart to see changes
With your students properly added to roster and their settings (time zones, locale, etc) configured, you may add appointments then generate
emails automatically. The app will account for both locale and time zone difference, populate the student's Zoom link, your name where appropriate
and include a standardized message body you can also define

# Contributing

If you feel the project can be improved, please fork this repo, make changes and place a PR with a description of the new features.
Please don't forget to update the test package as appropriate

# Tests

npm run test

# Questions

[Maintainer](https://github.com/iatenine)  
For further questions, direct emails [here](mailto:FullJackDevelopment@gmail.com)

# License

This project is covered under [The MIT License](https://opensource.org/licenses/MIT)
