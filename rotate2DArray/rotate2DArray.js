/**
 * @param {Array<Array<any>>} arr
 * @returns {Array<Array<any>>} return rotated array
 */
function rotate2DArray(arr) {
    const {length: height} = arr;
    if (!height) return arr;

    const {length: width} = arr[0];

    const res = [];
    for (let x = 0; x < width; x++) {
        res.push([]);
        for (let y = height - 1; y >= 0; y--) {
            res[x][height - 1 - y] = arr[y][x];
        }
    }

    return res;
}

module.exports = rotate2DArray;