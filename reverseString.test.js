const reverseString = require("./reverseString.js")


test('funciton reverse string works',()=>{
    expect(reverseString("olleH")).toBe('Hello');
})

test('funciton reverse string works with diffrent words',()=>{
    expect(reverseString("dog")).toBe('god');
})