/**
 * @param {Array<Number | String>} arr
 * @returns {Number}
 */
function sumOf(arr) {
    arr = arr
        .filter((e) => /\d+\D*/.test(e.toString()))
        .map((e) => {
            if (typeof e === 'string') {
                const idx = e.search(/\D/);
                return Number(e.slice(0, ~idx ? idx : e.length));
            }

            return e;
        });

    if (!arr.length) return 0;
    return arr.reduce((a, b) => a + b, 0);
}

module.exports = sumOf;