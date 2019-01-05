function bankomat(entry, entrySum) {
    const startEntry = {...entry};
    entry = {...entry};

    const cupures = Object.keys(entry).map(Number).sort((a, b) => b - a);

    let sum = 0;
    let isModified;

    do {
        isModified = false;
        for (let i = 0; i < cupures.length; i++) {
            const cupure = cupures[i];

            if ((sum + cupure <= entrySum) && entry[cupure] > 0) {
                entry[cupure] -= 1;
                sum += cupure;

                isModified = true;
                break;
            }
        }
    } while (sum != entrySum && isModified)

    if (sum !== entrySum) {
        return {...startEntry};
    }

    return entry;
}

module.exports = bankomat;