const capitalize= require("./capitalize");



test('capitalize', () => {
    expect(capitalize('cat')).toBe("CAT");
  });


  test('capitalize2', () => {
    expect(capitalize('dog')).toBe("DOG");
  });