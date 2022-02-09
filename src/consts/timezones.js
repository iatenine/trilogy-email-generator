// List of js recognized timezones:
const timeZones = {
  // America
  EST: "America/New_York",
  CST: "America/Chicago",
  MST: "America/Denver",
  PST: "America/Los_Angeles",
  Arizona: "America/Phoenix",

  // Europe
  CEST: "Europe/Berlin",
  GMT: "Europe/London",

  // Australia
  AEDT: "Australia/Sydney",
  ACDT: "Australia/Adelaide",
  AWST: "Australia/Perth",

  getJsTimeZoneByCode: (timeZone) => {
    return timeZones[timeZone];
  },
};

module.exports = { timeZones };
