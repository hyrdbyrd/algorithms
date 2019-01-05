/**
 * @param {Array<number>} arr
 * @access formula - O(n)
 * @returns {string} zipped array as string
 */
function zipArray(arr) {
    if (!Array.isArray(arr)) return arr;

    // We can get not sorted array
    arr = arr.sort((a, b) => a - b);

    // Check for standart size for that function
    if (arr.length < 2) return arr.join('');

    // We can't start from slice, like a --2,3
    let isSlice = false;
    let res = '';

    arr.forEach((cur, i) => {
        // I can't pop, becose isEq will be not correct!
        if (i === arr.length - 1) return;
        // Checks is next elem ordered
        const isEq = cur + 1 === arr[i + 1];

        if (!isEq) {
            // Always when !isEq, we write devided result
            res += `${cur},`;
            isSlice = false;
        } else if (!isSlice && isEq) {
            // On every slice-start
            res += `${cur}-`;
            isSlice = true;
        }
    });

    // Write last elem
    res += arr[arr.length - 1];
    return res;
}

module.exports = zipArray;