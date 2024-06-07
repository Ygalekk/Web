<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Родин Тимур Андреевич</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №5.«JS»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>HTML</b> —  стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.</p>
<p><b>CSS</b> — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL.</p>


<h1 style="text-align: center">Задачи CSS</h1>
<ol>
    <li>Создайте переменную str и присвойте ей значение 'hdfgv'. Обращаясь к отдельным символам этой строки выведите на
        экран символ 'h', символ 'd', символ 'v'.
    </li>
    <li>Напишите скрипт, который считает количество секунд в часе.</li>
    <li>Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк
        кода при этом не должно измениться. Код для переделки: <br> <code>var num = 1; <br> num = num + 12; <br> num =
            num - 14; <br> num = num * 5; <br> num = num / 7; <br> num = num + 1; <br> num = num - 1; <br>
            alert(num);</code>
    </li>
    <li>Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода
        alert.
    </li>
    <li>Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат
        деления).
    </li>
    <li>Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран
        значение переменной result.
    </li>
    <li>Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.</li>
    <li>Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте
        переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result.
        Выведите на экран значение переменной result.
    </li>
    <li>Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.</li>
    <li>Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате
        'час:минута:секунда'.
    </li>
    <li>Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.</li>
    <li>Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного
        массива.
    </li>
    <li>Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения
        JavaScript?
    </li>
    <li>Какое будет выведено значение: <code>let x = 5; alert(x++);</code> ?</li>
    <li>Чему равно такое выражение: <code>[] + false - null + true</code> ?</li>
    <li>Что выведет этот код: <code>let y = 1; let x = y = 2; console.log(x);</code> ?</li>
    <li>Чему равна сумма <code>[] + 1 + 2</code> ?</li>
    <li>Создайте переменные <code>a6, a7, a8, a9, a10</code>. Поместите в них результат выражений: <br> <code>5
        % 3,</code> <br> <code>3 % 5,</code> <br> <code>5 + '3',</code> <br> <code>'5' - 3,</code> <br> <code>75
        + 'кг'</code>
    </li>
    <li>Напишите скрипт, который находит площадь прямоугольника высота 23см (в числовую переменную height), шириной 10см
        (в числовую переменную width), значение площади должно храниться в числовой переменной s.
    </li>
    <li>Напишите скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
        результат поместите в переменную v.
    </li>
    <li>Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p — 10%), кол-во лет (years — 5). Найти
        переплату по кредиту, значение переплаты должно содержаться в переменной perepl.
    </li>
    <li>Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора
        определения типа убедитесь, что переменные принадлежат типам: string, number, boolean.
    </li>
    <li>Дано число, необходимо вернуть противоположное число.</li>
    <li>Решить задачу на сайте https://www.codewars.com/kata/56530b444e831334c0000020 </li>
    <li>Решить задачу на сайте https://www.codewars.com/kata/583710ccaa6717322c000105</li>
    <li>Решить задачу на сайте https://www.codewars.com/kata/5a805d8cafa10f8b930005ba</li>
    <li>Решить задачу на сайте https://www.codewars.com/kata/5763bb0af716cad8fb000580</li>
    <li>Решить задачу на сайте https://www.codewars.com/kata/578a8a01e9fd1549e50001f1</li>
    <li>Решить задачу на сайте https://www.codewars.com/kata/57eae20f5500ad98e50002c5</li>
</ol>



<h1 style="text-align: center">Решения JS</h1>

<h2 style="text-align: center">Файл 1.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let str = 'hdfgv';
    console.log(str[0]);
    console.log(str[2]);
    console.log(str[4]);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 2.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>

    let secondsInMinute = 60;
    let minutesInHour = 60;

    let secondsInHour = secondsInMinute * minutesInHour;

    console.log("Секунд в часе " + secondsInHour);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 3.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num++;
    num--;
    alert(num);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 4.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    var num = 3;
    alert(num);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 5.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const a = 10;
    const b = 2;

    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;

    console.log("Сложение: " + sum);
    console.log("Вычитание: " + difference);
    console.log("умножение: " + product);
    console.log("деление: " + quotient);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 6.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const c = 15;
    const d = 2;

    let result = c + d;

    console.log("Значение переменной result: " + result);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 7.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const a = 10;
    const b = 2;
    const c = 5;

    let sum = a + b + c;

    console.log("Сумма: " + sum);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 8.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const a = 17;
    const b = 10;

    let c = a - b;

    const d = 7;

    let result = c + d;

    console.log("Значение переменной result: " + result);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 9.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let secondsInHour = 60 * 60;
    let secondsInDay = secondsInHour * 24;
    let secondsInMonth = secondsInDay * 30;

    console.log("Количество секунд в часе: " + secondsInHour);
    console.log("Количество секунд в сутках: " + secondsInDay);
    console.log("Количество секунд в месяце: " + secondsInMonth);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 10.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let currentTime = hour + ':' + minute + ':' + second;

    console.log("Текущее время: " + currentTime);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 11.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let number = 5;
    let square = number ** 2;

    console.log("Квадрат числа " + number + " равен: " + square);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 12.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const array = [1, 2, 3, 4, 5, 6];
    const sum = array.filter(num => num % 2 === 0).reduce((acc, num) => acc + Math.sqrt(num), 0);
    console.log(sum);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 13.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    console.log(1.15 + 2.30);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 14.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let x = 5; alert(x++);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 15.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    console.log([ ] + false - null + true)
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 16.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let y = 1; let x = y = 2; console.log(x);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 17.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    console.log([ ] + 1 + 2)
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 18.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let a6 = 5 % 3;
    let a7 = 3 % 5;
    let a8 = 5 + '3';
    let a9 = '5' + 3;
    let a10 = 75 +'кг';
    console.log([a6, a7, a8, a9, a10]);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 19.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const height = 23;
    const weight = 10;
    const S = height * weight * 0.5;
    console.log(S);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 20.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const heightC = 10;
    const dC = 4;
    const v = Math.PI * (dC * 0.5) ** 2 * heightC;
    console.log(v)
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 21.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let amount = 2000000;
    const years = 5;
    const p = 0.1;

    for (let i = 0; i < years; i++) {
        amount += amount * p;
    }
    console.log(amount)
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 22.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let str = 'Привет';
    let num = 123;
    let flag = true;
    let txt = 'true';
    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof flag);
    console.log(typeof txt);
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 23.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let n = 10;
    function rev (num){
        return num * (-1);
    }
    console.log(rev(n))
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 24.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function chromosomeCheck(sperm) {
        let message = "Congratulations! You're going to have a ";
        if (sperm.match(/Y/gi)?.length > 0) {
            return message + 'son.';
        }
        return message + 'daughter.';
    }
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 25.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  function simpleMultiplication(number) {
    return !Boolean(number & 1) ? number * 8: number * 9;
  }
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 26.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function nearestSq(n){
        return Math.pow(Math.round(Math.sqrt(n)), 2);
    }
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 27.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function countSquares(cuts){
        return cuts === 0 ? 1 : cuts * cuts * 5 + 2;
    }
</script>
</body>
</html>
```

<h2 style="text-align: center">Файл 28.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script>
        function periodIsLate(last, today, cycleLength) {
            return (today - last) / 1000 / 60 / 60 / 24 > cycleLength;
        }
    </script>
</body>
</html>
```

<h2 style="text-align: center">Файл 29.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function noSpace(x){
        return x.replace(/ /g, '');
    }
</script>
</body>
</html>
```
<h1 align = "center">Вывод</h1>
<p>В ходе выполнения лабораторной работы по JavaScript я решил 29 заданий. Задания охватывали различные аспекты языка, такие как работа со строками, числами, переменными, арифметические операции, условные операторы, циклы, массивы, функции и другие ключевые концепции JavaScript.

В процессе выполнения лабораторной работы я получил практический опыт работы с JavaScript и улучшил свои навыки программирования. Решение каждого задания требовало применения определённых знаний и навыков, а также логического мышления для достижения правильного результата.

Я успешно справился с поставленными задачами и закрепил свои знания в области JavaScript. Эта лабораторная работа помогла мне лучше понять принципы работы языка и его возможности.</p>
