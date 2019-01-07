/**
 * @param {Array<Number>} arr
 */
function quickSort(arr) {
    arr = [...arr];

    if (arr.length < 2) return arr;

    // Get random element from array for effective formula -
    // If index will be static like 0, we can get O(n ^ 2) formuala!
    // Exmaple: [0, 1, 2, 3, 4, 5]; - we've gotcha the n ^ 2 iterations!
    const actualIdx = Math.floor(Math.random() * arr.length);
    const actual = arr[actualIdx];

    const less = [];
    const more = [];

    arr.forEach((val, i) => {
        // Don't check the actual value
        // (will infinity loop, if we wouldn't set that check)
        if (i === actualIdx) return;

        // We've not interes for equal value
        // If we delete "=", nothing be changes
        if (val <= actual) less.push(val);
        else more.push(val);
    });

    return [...quickSort(less), actual, ...quickSort(more)];
    // For version ECMAScript less than 5
    // return [].concat(quckSort(less), [actual], quickSort(more))
}

module.exports = quickSort;