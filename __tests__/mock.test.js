// Example test
describe("Mock test suite", () => {
  it("should create an array of emails", () => {
    const appts = [
      // "Create appt for Jane Doe on 2022-03-18 at 14:30 (24 hour format required)",
      // ["Mar", 18, "Jane Doe", 14, 30],
      ["Feb", 9, "Kishan Gosrani", 17, 0],
    ];

    expect(appts).toBeInstanceOf(Array);
    expect(appts.length).toBe(1);
    expect(appts[0]).toBeInstanceOf(Array);
  });
});
