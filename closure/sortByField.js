function sortByField(field, reverse = false) {
    const diff = reverse ? -1 : 1;
    return (a, b) => (a[field] > b[field] ? 1 : -1) * diff;
}

module.exports = sortByField;