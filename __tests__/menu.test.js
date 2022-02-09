const { mainMenu, studentMenu } = require("../src/menu/");

describe("Menu Test Suite", () => {
  // Test main menu
  it("should have a main menu and array", () => {
    expect(mainMenu).toBeInstanceOf(Object);
    expect(mainMenu.menu).toBeInstanceOf(Array);
    expect(mainMenu.options).toBeInstanceOf(Array);
    expect(mainMenu.options.length).toBe(5);
    expect(mainMenu.options[mainMenu.options.length - 1]).toBe("Exit");
    expect(mainMenu.menu[0].choices).toBe(mainMenu.options);
  });

  // Test main menu
  it("should have a student menu defined with proper keys", () => {
    expect(studentMenu).not.toBe(undefined);
    expect(studentMenu.addStudentMenu).toBeInstanceOf(Function);
    expect(studentMenu.editStudentMenu).toBeInstanceOf(Function);
    expect(studentMenu.dropStudentMenu).toBeInstanceOf(Function);
  });

  it("should return properly lengthed array menus", () => {
    // New student name
    // Select time zone
    // Enter Zoom Link
    // Select locale
    expect(studentMenu.addStudentMenu().length).toBe(4);
    // Select student to edit
    // Select property
    // Insert new value
    // Confirm Update
    expect(studentMenu.editStudentMenu().length).toBe(4);
    // Select student
    // Confirm Drop
    expect(studentMenu.dropStudentMenu().length).toBe(2);
  });

  it("should not have undefined choices for lists", () => {
    expect(studentMenu.addStudentMenu()[1].choices).not.toBe(undefined);
    expect(studentMenu.addStudentMenu()[3].choices).not.toBe(undefined);

    expect(studentMenu.editStudentMenu()[0].choices).not.toBe(undefined);
    expect(studentMenu.editStudentMenu()[1].choices).not.toBe(undefined);
  });
});
