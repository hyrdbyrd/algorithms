/**
 * @param {String} str
 * @access formula O(n / 2)
 * @param {Boolean?} check - did need the check of symbols
 * @returns {Boolean}
 */
function isPolindrome(str, check = true) {
    if (check) {
        str = str.toLowerCase().replace(/[^a-zа-яё]/g, '');
    }

    const len = str.length;
    let offset = 0;

    while (offset < len / 2) {
        if (str[offset] !== str[len - offset - 1]) {
            return false;
        }

        offset++;
    }

    return true;
}

module.exports = isPolindrome;