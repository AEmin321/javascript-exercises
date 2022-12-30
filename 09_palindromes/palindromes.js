const palindromes = function (inputString) {
    let newStr=inputString.toLowerCase().replace(/[^a-z]/g, "");
    return (newStr.split('').reverse().join('')==newStr);
};

// Do not edit below this line
module.exports = palindromes;
