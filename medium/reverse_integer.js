/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numStr = x.toString().split('')
    let symbol = parseInt(numStr[0]) >=0

    if ({
        symbol = numStr.shift();
        numStr.reverse().join('')
        numStr.unshift(symbol)
        numStr= parseInt(numStr.join(''))
    }
    else {
        numStr =  parseInt(numStr.reverse().join(''))
    }

    if (-1 * Math.pow(2,31) <= numStr && numStr <= Math.pow(2, 31) - 1) 
return numStr
    else return 0;
};
