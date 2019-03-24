const setSkipped = arr => {
    arr = [...arr];
    arr = arr.sort((a, b) => a - b);

    let i = 0;
    let prev = arr[i];
    for (const cur of arr) {
        if (cur === prev + 1 || cur === prev) prev = cur;
        else {
            const right = arr.splice(i);

            prev += 1;
            arr.push(prev, ...right);
        }

        i++;
    }

    return arr;
};

module.exports = setSkipped;
