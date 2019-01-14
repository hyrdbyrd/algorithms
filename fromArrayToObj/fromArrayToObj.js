function fromArrayToObj(arr) {
    return arr.reduce((prev, cur) => (prev[cur.name] = cur.value, prev), {});
}

module.exports = fromArrayToObj;