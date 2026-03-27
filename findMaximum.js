function findMaximum(x,y){
    if(x > y){
        return x
    }
    else if(y >x){
        return y
    }
    else{
        return "Both numbers are equal"
    }
}
console.log(findMaximum(23, 45))