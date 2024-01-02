/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    if ( s.length <= 1) {
        if (s !== ' ') return 1
        else return 0
    };

    let str = s.split('');
    str = str.reverse();
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] ==  ) count++
        else break
    }

    str.splice(0, count);

    let found = str.findIndex((el) => { return el ===  })

    if (found === -1) str = str.reverse().join('')
    else str = str.slice(0,found).reverse().join('')

    return str.length
};

