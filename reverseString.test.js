const reverseString = require("./reverseString.js")


test('funciton reverse string works',()=>{
    expect(reverseString("olleH")).toBe('Hello');
})

test('funciton reverse string works with diffrent words',()=>{
    expect(reverseString("dog")).toBe('god');
})


/**
 * 
 * describe block
 * 
 * cases:
 * should handle an empty string
 * 
 * 
 * should handle a single character
 * 
 * 
 * should handle a string with spaces
 * 
 * 
 * should handle a string with numbers
 * 
 * should handle a string with special characters
 * 
 * should handle a palindrome string
 * 
 * 
 */