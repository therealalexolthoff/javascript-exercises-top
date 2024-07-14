const sumAll = function(start,end) {
    const isStartNumber = typeof(start) === "number"
    const isEndNumber = typeof(end) === "number"
    const isStartPositive = start > 0
    const isEndPositive = end > 0

    let finalNum = 0
    if (!isStartNumber || !isEndNumber || !isStartPositive || !isEndPositive){
        return "ERROR"
    }
    if (start < end){
        for (let i = start; i < end+1; i++){
            finalNum += i;
        }
    }
    else if (start > end){
        for (let i = end; i < start+1; i++){
            finalNum += i;
        }
    }
    
    return finalNum
};

// Do not edit below this line
module.exports = sumAll;
