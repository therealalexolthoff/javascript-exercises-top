const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(args) {
  const numbers = args.map((num) => parseInt(num))
  console.log(numbers)
  let num = numbers.reduce((num,counter) => num + counter, 0)
  return num
};

const multiply = function(args) {
  return args.reduce((counter,num) => counter * num)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let factorialNum = 1
  if (a === 0 || a === 1){
    return 1
  }
  for (let i = a; i > 0; i--){
    factorialNum *= i;
    }
  return factorialNum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
