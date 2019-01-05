function zipString(str) {
    let prevChar = str[0];
    let res = prevChar;

    let countOfChars = 1;

    for (let i = 1; i < str.length; i++) {
        const char = str[i];

        if (prevChar === char) countOfChars++;
        else {
            res += (countOfChars > 1 ? countOfChars : '') + char;

            prevChar = char;
            countOfChars = 1;
        }

        if (i >= str.length - 1) {
            res += (countOfChars > 1 ? countOfChars : '');
        }
    }

    return res;
}

module.exports = zipString;