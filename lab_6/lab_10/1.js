function findDivisibleNumbers(arr, divisor) {
    return arr.filter(num => num % divisor === 0);
}

console.log(findDivisibleNumbers([10, 15, 20, 25, 30], 5));
console.log(findDivisibleNumbers([3, 6, 9, 12, 15], 3));
console.log(findDivisibleNumbers([7, 14, 21, 28, 35], 7));
console.log(findDivisibleNumbers([2, 4, 6, 8, 10], 2));