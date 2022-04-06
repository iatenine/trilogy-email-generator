const locales = {
  // Only English locales are supported for now
  US: "en-US",
  Europe: "en-GB",
  Australia: "en-AU",

  getLocaleCode: (locale) => {
    switch (locale) {
      case "US":
        return locales.US;
      case "UK":
        return locales.Europe;
      case "Europe":
        return locales.Europe;
      case "Australia":
        return locales.Australia;
      default:
        return undefined;
    }
  },
};

module.exports = { locales };
