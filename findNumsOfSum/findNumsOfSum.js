const findNumsOfSum = (nums, summ) => {
    nums = [...nums];
    const hash = {};

    nums.forEach((e, i) => {
        if (!hash[e]) hash[e] = [i];
        else hash[e].push(i);
    });

    const res = [];
    nums.forEach((num, i) => {
        const nnum = summ - num;
        if (hash[nnum]) {
            const found = hash[nnum].find(e => e !== i);
            if (found) res.push([num, nnum]);
        }
    });

    return res;
};
