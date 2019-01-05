/**
 * @param {Array<Number>} arr
 * @returns {Boolean}
 */
function isMono(arr) {
    if (arr.length < 3) return true;
    return arr.every(isLess) || arr.every(isMore) || false;
}

/**
 * @param {Number} e
 * @param {Number} i
 * @param {Array<Number>} link
 * @returns {Boolean}
 */
function isLess(e, i, link) {
    if (i === 0) return true;
    return e < link[i - 1];
}

/**
 * @param {Number} e
 * @param {Number} i
 * @param {Array<Number>} link
 * @returns {Boolean}
 */
function isMore(e, i, link) {
    if (i === 0) return true;
    return e > link[i - 1];
}

module.exports = {
    isMono,
    isLess,
    isMore
};