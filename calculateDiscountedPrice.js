function calculateDiscountedPrice(originalPrice, discountPercentage){
    return originalPrice * discountPercentage / 100;
}
console.log(calculateDiscountedPrice(10000, 20)); // Output