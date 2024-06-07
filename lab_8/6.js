
console.log("Числа от 45 до 67:");
for (let number = 45; number <= 67; number++) {
    console.log(number);
}


console.log("Числа от 45 до 670, кратные 10:");
for (let number = 45; number <= 670; number++) {
    if (number % 10 === 0) {
        console.log(number);
    }
}