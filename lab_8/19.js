function addN(n) {
    return function(x) {
        return x + n;
    };
}

const add5 = addN(5);

console.log(add5(10));
console.log(add5(7));

const add3 = addN(3);

console.log(add3(8));
console.log(add3(2));