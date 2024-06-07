function words(n) {
    if (n === 0) {
        return 'товаров';
    }

    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'товаров';
    } else if (lastDigit === 1) {
        return 'товар';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'товара';
    } else {
        return 'товаров';
    }
}

console.log(words(0));
console.log(words(1));
console.log(words(2));
console.log(words(5));
console.log(words(11));
console.log(words(22));
console.log(words(100));