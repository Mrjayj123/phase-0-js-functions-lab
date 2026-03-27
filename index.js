function calculateTax(amount){
    return amount *0.10
}
calculateTax(45)
console.log(calculateTax)


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };