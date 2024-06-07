function operation(m, n, o) {
    return o(m, n);
}

const sum = function(a, b) {
    return a + b;
};

console.log(operation(2, 3, sum));

const multiply = function(a, b) {
    return a * b;
};

console.log(operation(4, 5, multiply));