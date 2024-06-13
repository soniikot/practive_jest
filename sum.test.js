const sum = require("./sum");

test ('adds 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})


/**
 * 
 * describe block
 * 
 * cases:
 * 
 * should add two negative numbers correctly
 * 
 * should add a positive and a negative number correctly
 * 
 * should add zero and a number correctly
 * 
 * should add two zeros correctly
 * 
 * should add decimal numbers correctly
 * 
 * 
 * exceptions!
 * should return NaN for non-numeric inputs
 * 
 */