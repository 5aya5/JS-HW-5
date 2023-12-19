var number1, number2, number3;

number1 = +prompt("Введи число:");
number2 = +prompt("Введи число:");
number3 = +prompt("Введи число:");

if (number1 > number2 && number1 < number3 || number1 < number2 && number1 > number3) {
    alert("Ответ: " + number1);
} else if (number2 > number1 && number2 < number3 || number2 < number1 && number2 > number3) {
    alert("Ответ: " + number2);
} else if (number3 > number1 && number3 < number2 || number3 < number1 && number3 > number2) {
    alert("Ответ: " + number3);
} else {
    alert("Ошибка! Введите разные числа.");
}