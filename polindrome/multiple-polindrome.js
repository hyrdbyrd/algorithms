const allWords = require('../all-words/allWords');
const isPolindrom = require('./isPolindrome');

/**
 * @param {String} str
 * @access formula O(n * (log(n) + 2))
 * @returns {String}
 */
function multiplePolindrome(str) {
    return allWords(str.toLowerCase().replace(/[^a-zа-яё]/g, ''))
        .filter((word) => isPolindrom(word, false))
        .reduce((prev, cur) => prev.length < cur.length ? cur : prev, '');
}

module.exports = multiplePolindrome;
