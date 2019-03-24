const deleteCopies = arr => {
    arr = [...arr];
    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];

        if (!hash[cur]) {
            hash[cur] = true;
        } else {
            arr.splice(i--, 1);
        }
    }

    return arr;
};

module.exports = deleteCopies;
