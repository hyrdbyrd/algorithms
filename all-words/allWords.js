/**
 * @param {String} str
 * @access formula O(n * log(n))
 * @returns {Array<String>}
 */
function allWords(str) {
    const {length: len} = str;

    const res = [];
    if (len < 2) return res;

    let start = 0;
    let end = 1;

    while (start < len - 1) {
        if (end > len - 1) {
            end = ++start + 1;
            continue;
        }

        res.push(str.slice(start, end + 1));
        end++;
    }

    return res;
}

module.exports = allWords;
