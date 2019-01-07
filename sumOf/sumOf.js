/**
 * @param {Array<Number | String>} arr
 * @returns {Number}
 */
function sumOf(arr) {
    let summ = 0;

    for (let item of arr) {
        if (typeof item === 'string') {
            const idx = item.search(/\D/);
            item = Number(item.slice(0, ~idx ? idx : item.length));
        }

        summ += item;
    }

    return summ;
}

module.exports = sumOf;