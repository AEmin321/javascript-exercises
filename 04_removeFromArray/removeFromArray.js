const removeFromArray = function(...args) {
    const inputArray=args[0];
    return inputArray.filter(function(val){
        return !args.includes(val);
    })
};

// Do not edit below this line
module.exports = removeFromArray;
