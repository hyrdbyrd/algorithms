function isCorrectBrackets(str, opening = {'[': ']', '{': '}', '(': ')', '<': '>'}) {
    let regexpStr = '[^'
    for (const bracket in opening) {
        regexpStr += `\\${bracket}\\${opening[bracket]}`;
    }
    regexpStr += ']';

    str = str.replace(new RegExp(regexpStr, 'g'), '');

    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const c = str[i];

        if (c in opening) stack.push(opening[c]);
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }

    if (stack.length > 0) return false;
    return true;
}

module.exports = isCorrectBrackets;