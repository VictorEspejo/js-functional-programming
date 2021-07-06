console.log("%c COMPOSE EXAMPLE", "background: blue");

const compose = (f, g) => (data) => f(g(data));

//EXAMPLE
const multiply3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

const multiplyAndPositive = compose(multiply3, makePositive);

console.log("MULTIPLY AND POSITIVE: ", multiplyAndPositive(4));
