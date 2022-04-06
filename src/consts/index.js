const { months } = require("./months");
const { messageBody } = require("./message");
const { timeZones, getJsTimeZoneByCode } = require("./timezones");
const { locales, getLocaleCode } = require("./locales");

module.exports = {
  months,
  messageBody,
  timeZones,
  locales,
  getJsTimeZoneByCode,
  getLocaleCode,
};
