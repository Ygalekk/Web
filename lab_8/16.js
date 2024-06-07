function avg(...args) {
    if (args.length === 0) {
        return 0;
    }

    const sum = args.reduce((acc, val) => acc + val, 0);
    return sum / args.length;
}

console.log(avg(2, 4, 6));
console.log(avg(10, 20, 30, 40, 50));
console.log(avg()); 
