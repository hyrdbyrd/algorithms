function accumulate(str) {
    return str
        .split('')
        .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
        .join('-');
}

module.exports = accumulate;