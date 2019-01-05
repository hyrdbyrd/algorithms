/**
 * @param {Array<any>} arr
 * @access formula O(n * log(n))
 * @returns {Array<any>}
 */
function flatten(arr) {
    const res = [];

    while (arr.length) {
        const val = arr.pop();

        if (Array.isArray(val)) {
            arr.push.apply(arr, val)
            // OR
            // arr = arr.concat(val);
            // OR (ES6)
            // arr.push(...arr)
        } else {
            res.push(val);
        }
    }

    return res.reverse();
}

module.exports = flatten;