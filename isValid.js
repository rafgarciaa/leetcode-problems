// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//     Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

var isValid = function (s) {
    if (s === '') return true;

    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (map[ch]) {
            stack.push(map[ch]);
        } else {
            if (ch !== stack.pop()) return false;
        }
    }

    return stack.length === 0 ? true : false;
};