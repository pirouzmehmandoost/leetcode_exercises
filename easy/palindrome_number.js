/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString().split('');

    for (let i = 0; i < y.length; i++) {
        if (y[i] !== y.reverse()[i]) {
            return false;
        }
    }
    return true;

};
