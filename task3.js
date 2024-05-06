function multiline(strings, ...expressions) {
    let combinedString = strings.reduce((acc, part, i) => {
        return acc + part + (expressions[i] || '');
    }, '');

    const lines = combinedString.split('\n');

    if (lines[0].trim() === '') lines.shift();
    if (lines[lines.length - 1].trim() === '') lines.pop();

    const numberedLines = lines.map((line, index) => {
        return `${index + 1} ${line}`;
    });

    return numberedLines.join('\n');
}

const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2     return a + b;
//  3 }"
