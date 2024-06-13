const capitalize= require("./capitalize");



test('capitalize', () => {
    expect(capitalize('cat')).toBe("CAT");
  });


  test('capitalize2', () => {
    expect(capitalize('dog')).toBe("DOG");
  });


  /**
   * 
   * describe block
   * 
   * 
   * cases:
   * 
   * 
   * an empty string
   * 
   * 
   * same string if already capitalized
   * 
   * 
   * a string with mixed case
   * 
   * 
   * capitalize a string with non-alphabetic characters
   * 
   * should handle a string with spaces
   * 
   * should capitalize a single character
   * 
   */