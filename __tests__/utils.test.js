const { createEmails, writeFile, runMenu } = require("../src/utils/");

describe("Utils Test Suite", () => {
  it("should export functions", () => {
    expect(createEmails).toBeInstanceOf(Function);
    expect(writeFile).toBeInstanceOf(Function);
    expect(runMenu).toBeInstanceOf(Function);
  });
});
