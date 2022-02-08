// Example test
const { locales, months, messageBody, timeZones } = require("../consts");

describe("Consts Test Suite", () => {
  it("should have proper time zones", () => {
    expect(timeZones).toBeInstanceOf(Object);

    // American time zones
    expect(timeZones.EST).toBe("America/New_York");
    expect(timeZones.Arizona).toBe("America/Phoenix");
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
});
