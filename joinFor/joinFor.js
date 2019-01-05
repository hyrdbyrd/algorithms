/**
 * @param {String} symb
 * @param  {...any} arr
 * @access formula - O(n)
 * @returns {String}
 */
function joinFor(symb, ...arr) {
    return arr.join(symb);
}

module.exports = joinFor;