// Example test
const { locales, months, messageBody, timeZones } = require("../src/consts");

// Test all objects exported from consts directory

describe("Consts Test Suite", () => {
  it("should have proper time zones", () => {
    expect(timeZones).toBeInstanceOf(Object);

    // American time zones
    expect(timeZones.getJsTimeZoneByCode("EST")).toBe("America/New_York");
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
  });

  it("should have proper months", () => {
    expect(months).toBeInstanceOf(Object);
    console.log("Jan".toUpperCase());
    expect(months.getMonthValueByName("JAN")).toBe(1);
    expect(months.getMonthValueByName("Jan")).toBe(1);
    expect(months.getMonthValueByName("APR")).not.toBe(10);
    expect(Object.keys(months.monthList).length).toBe(12);
  });

  it("should have proper message body", () => {
    expect(messageBody)
      .toBe(`(If you have not used zoom before please join the meeting at least 15 minutes early because it may have you download and install some software.)

Again, all I need from you:
 *  Be on Tutors & Students Slack 5 minutes before your time slot.
 *  Make sure your computer/mic/internet connection are working.
 *  Make sure your workspace is quiet and free from interruptions.
 *  At the end of the session, I will provide you with a link to a 2 minute evaluation form that you are required to complete.


Slack or email me with any questions.  I’m looking forward to our meeting!
Please Reply All to this email so that I know you have seen it.

(CC Central Support on all tutor email by always using REPLY ALL).

Sincerely,`);
  });
});
