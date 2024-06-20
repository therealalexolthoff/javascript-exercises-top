const repeatString = function(string,num) {
    let newString = ''
    if (num < 0){
        return "ERROR"
    }
    for (let counter = 0; counter < num; counter++){
        newString += string
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
