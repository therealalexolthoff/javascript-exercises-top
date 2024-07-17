const fibonacci = function(point) {
    if (point * -1 > 0){
        return "OOPS"
    }
    if (typeof point === "string"){
       point = parseInt(point)
    }
    let counter = 0
    let fibonacciNumber1 = 0
    let fibonacciNumber2 = 1
    let sum = 0
    if (point === 1){
        return 1
    }
    while (counter < point-1){
        sum = fibonacciNumber1 + fibonacciNumber2
        fibonacciNumber1 = fibonacciNumber2
        fibonacciNumber2 = sum
        counter += 1
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
