const { tutorName, students } = require("../src/data/student-list.example");

describe("Data Test Suite", () => {
  it("should have undefined tutor name", () => {
    expect(tutorName).toBe(undefined);
  });

  it("should have proper students", () => {
    expect(students).toBeInstanceOf(Object);
    expect(students["John Doe"]).toBeInstanceOf(Object);
    expect(students["Jane Doe"]).toBeInstanceOf(Object);
    expect(Object.keys(students).length).toBe(2);
  });
});
