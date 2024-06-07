class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Стек пуст";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

function calculateRPN(expression) {
    const stack = new Stack();

    const tokens = expression.split(" ");

    for (let token of tokens) {
        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else {

            const b = stack.pop();
            const a = stack.pop();

            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(a / b);
                    break;
                default:
                    throw new Error("Неизвестная операция: " + token);
            }
        }
    }

    return stack.pop();
}

const rpnExpression = "5 3 + 2 * 2 +";
const result = calculateRPN(rpnExpression);
console.log(result);