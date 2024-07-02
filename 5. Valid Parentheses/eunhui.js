var isValid = function (s) {
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (obj[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();

            if (obj[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('()[]{[]}'));
console.log(isValid('([])'));
console.log(isValid('()'));
console.log(isValid('{[]}'));
console.log(isValid('{[]}['));
