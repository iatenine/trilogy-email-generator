const locales = {
  // Only English locales are supported for now
  US: "en-US",
  Europe: "en-GB",
  Australia: "en-AU",

  getLocaleCode: (locale) => {
    return locales[locale];
  },
};

module.exports = { locales };
