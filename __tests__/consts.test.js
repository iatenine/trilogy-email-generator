// Example test
const {
  locales,
  months,
  messageBody,
  timeZones,
  getJsTimeZoneByCode,
  getLocaleCode,
} = require("../src/consts");
const messages = require("../src/consts/message");

// Test all objects exported from consts directory

describe("Consts Test Suite", () => {
  it("should have proper time zones", () => {
    expect(timeZones).toBeInstanceOf(Object);

    // American time zones
    expect(getJsTimeZoneByCode("EST")).toBe("America/New_York");
    expect(timeZones.Arizona).toBe("America/Phoenix");
    expect(timeZones.EST).not.toBe("America/Chicago");

    // European time zones
    expect(timeZones.CEST).toBe("Europe/Berlin");
    expect(timeZones.GMT).toBe("Europe/London");

    // Australian time zones
    expect(timeZones.AEDT).toBe("Australia/Sydney");
    expect(timeZones.AWST).toBe("Australia/Perth");
    expect(timeZones.ACDT).toBe("Australia/Adelaide");
  });

  it("should have proper locales", () => {
    expect(locales).toBeInstanceOf(Object);

    // US, UK, AU locales
    expect(locales.US).toBe("en-US");
    expect(locales.Europe).toBe("en-GB");
    expect(locales.Australia).toBe("en-AU");

    expect(getLocaleCode("US")).toBe("en-US");
    expect(getLocaleCode("Australia")).toBe("en-AU");
    expect(getLocaleCode("UK")).toBe("en-GB");
    expect(getLocaleCode("invalid")).toBe(undefined);
  });

  it("should have proper months", () => {
    expect(months).toBeInstanceOf(Object);
    expect(months.getMonthValueByName("JAN")).toBe(1);
    expect(months.getMonthValueByName("Jan")).toBe(1);
    expect(months.getMonthValueByName("APR")).not.toBe(10);
    expect(Object.keys(months.monthList).length).toBe(12);
  });

  it("should have proper message body", () => {
    const messageBody = messages.generateEmailBody(
      "The subject line",
      "This will be the time",
      "studentName",
      "zoomLink",
      "Todd Chavez"
    );
    expect(messageBody.includes("This will be the time")).toBe(true);
    expect(messageBody.includes("Todd Chavez")).toBe(true);
    expect(messageBody.includes("banana")).not.toBe(true);
  });
});
