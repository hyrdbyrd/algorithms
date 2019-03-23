function polishSet(str) {
    const definedOperators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    const err = msg => new Error(`Incorrect input - ${msg}`);

    let numbers = str.split(' ');
    const operators = numbers
        .splice(numbers.findIndex(e => !!definedOperators[e]))
        .reverse();

    numbers = numbers.map(Number);

    // validation
    if (numbers.length - 1 !== operators.length)
        throw err('length of operators and length of number have difference');
    if (numbers.some(e => !!definedOperators[e]))
        throw err(`not correct operator, exist ${Object.keys(definedOperators)}`);
    if (numbers.some(isNaN))
        throw err(`NaN`);

    const fistNumber = numbers.pop();

    return numbers
        .reverse()
        .reduce((acc, cur) => definedOperators[operators.pop()](acc, cur), fistNumber);
}

module.exports = polishSet;
