const { months } = require("./months");
const messages = require("./message");
const { timeZones, getJsTimeZoneByCode } = require("./timezones");
const { locales, getLocaleCode } = require("./locales");

module.exports = {
  months,
  messages,
  timeZones,
  locales,
  getJsTimeZoneByCode,
  getLocaleCode,
};
