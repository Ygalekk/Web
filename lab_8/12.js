function hello2(name) {
    if (name) {
        return "Привет, " + name + "!";
    }

    return "Привет, гость!";
}


console.log(hello2("Василий"));
console.log(hello2());