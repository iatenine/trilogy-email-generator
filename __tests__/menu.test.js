const { mainMenu, studentMenu } = require("../src/menu/");

describe("Menu Test Suite", () => {
  // Test main menu
  it("should have a main menu and array", () => {
    expect(mainMenu).toBeInstanceOf(Object);
    expect(mainMenu).toBeInstanceOf(Array);
    expect(mainMenu).toHaveLength(1);
    expect(mainMenu[0].choices).toBeInstanceOf(Array);
    expect(mainMenu[0].choices.length).toBeGreaterThan(0);
    expect(mainMenu[0].choices[mainMenu[0].choices.length - 1]).toBe("Exit");
  });

  // Test main menu
  it("should have a student menu defined with proper keys", () => {
    expect(studentMenu).not.toBe(undefined);
    expect(studentMenu.addStudentMenu).toBeInstanceOf(Array);
    expect(studentMenu.dropStudentMenu).toBeInstanceOf(Array);
  });

  it("should return properly lengthed array menus", () => {
    // New student name
    // Select time zone
    // Enter Zoom Link
    // Select locale
    expect(studentMenu.addStudentMenu.length).toBe(4);
    // Select student
    // Confirm Drop
    expect(studentMenu.dropStudentMenu.length).toBe(2);
  });

  it("should not have undefined choices for lists", () => {
    expect(studentMenu.addStudentMenu[1].choices).not.toBe(undefined);
    expect(studentMenu.addStudentMenu[3].choices).not.toBe(undefined);
  });
});
