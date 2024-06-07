function isPalindrome(word) {
    word = word.replace(/\s/g, '').toLowerCase();

    return word === word.split('').reverse().join('');
}

console.log(isPalindrome("Бел хлеб"));