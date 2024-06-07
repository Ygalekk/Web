let size = 120;
let unit = "Кб";
let bytes;

switch (unit) {
    case "Кб":
        bytes = size * 1024;
        break;
    case "Мб":
        bytes = size * 1024 * 1024;
        break;
    case "Гб":
        bytes = size * 1024 * 1024 * 1024;
        break;
    default:
        console.log("Неподдерживаемая единица измерения.");
}

console.log("Количество байт в size:", bytes);