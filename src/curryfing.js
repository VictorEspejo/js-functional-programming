console.log("%c CURRYFING", "background: blue");

const multiply = (f) => (s) => f * s;

console.log("CURRYFY: ", multiply(2)(4));

const partialMultiply = (f, g, s) => f * g * s;

const multiplyBy5 = partialMultiply.bind(null, 5);

console.log("PARTIAL CURRIFY: ", multiplyBy5(4, 5));
