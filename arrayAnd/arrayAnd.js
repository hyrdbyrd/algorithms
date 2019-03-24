const arrayAnd = (arr1, arr2) => {
    const hash = {};

    arr1.forEach(e => hash[e.toString()] = true);

    return arr2
        .map(val => ({ val, inc: hash[val.toString()] }))
        .filter(e => e.inc)
        .map(({ val }) => val);
};
