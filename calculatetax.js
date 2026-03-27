//create a function called calculateTax that takes in an amount and returns the amount multiplied by 0.10
function calculateTax(amount){
    if (amount > 0){
        return amount *0.10
    }
    else if(amount < 0){
        return "error: amount cannot be negative"
    }
    else(
        return "Amount is equal to zero"
    )
}
console.log(calculateTax(45))
//output 4.5