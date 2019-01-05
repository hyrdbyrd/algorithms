/**
 * @param {String} str
 * @param {Number} n
 * @returns {String}
 */
function getWord(str, n) {
    return str.split(/\b/).filter((e) => !/\s+/.test(e) && e)[n - 1] || '';
}

module.exports = getWord;