const palindromes = function (testString) {
   testString = testString.toLowerCase()
   let stringArray = testString.split("").filter((element) => element !== " ").filter((element)=> element !== ".").filter(element=> element !== ",").filter(element => element !== "!")

   let fixedTestString = stringArray.join("")
   let newString = stringArray.reverse().join("")
   return fixedTestString === newString
};
// Do not edit below this line
module.exports = palindromes;
