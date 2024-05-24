<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Родин Тимур Андреевич</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №3.«HTML»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>HTML</b> —  стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.</p>
<p><b>CSS</b> — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL.</p>


<h1 style="text-align: center">Задачи</h1>
<ol>
  <li>Создать все виды заголовков с текстом "Hello world" c классом "heading".
  <li>Каждому заголовку также дать id (к прим. heading-1, heading-2...) </li>
  <li>Задать всем заголовкам цвет текста на красный </li>
  <li>Второму заголовку синий </li>
  <li>Третьему заголовку поменять задний фон на чёрный </li>
  <li>Четвертому заголовку сделать border и округлить углы </li>
  <li>Пятому заголовку создать :hover эффект (любой)</li>
  <li>Создайте 6 input с разными типами. </li>
  <li>Создать нумерованный список из 4 элементов с текстом “Нумерованный”</li>
  <li>Создать маркированный список из 4 элементов с текстом “Маркированный” и квадратным маркером.</li>
  <li>Создайте веб-страницу с зеленым фоном и белым текстом из 30 слов. </li>
  <li>Создать 6 блоков с нумерацией и такими параметрами (ширина 100px и высота 100px, зеленого цвета , внешним отступом 10px). Их родительским элементом должен быть container. </li>
  <li>Поставить все блоки по центру страницы.</li>
  <li>Добавьте тэг iframe на вашу страницу.</li>
  <li>Сделайте простую форму регистрации на сайте (Только верстка).</li>
  <li>Сделайте таблицу на странице.</li>
  <li>Создайте стиль для заголовка h1 с красным цветом текста.</li>
  <li>Установите шрифт Arial для всех параграфов на странице.</li>
  <li>Добавьте тень на блок div с помощью свойства box-shadow.</li>
  <li>Установите фоновый цвет #f0f0f0 для всего документа.</li>
  <li>Создайте анимацию, которая будет мигать красным цветом.</li>
  <li>Установите отступы внутри блока div с помощью свойства padding.</li>
  <li>Создайте стиль для ссылок, которые будут менять цвет при наведении на них курсора.</li>
  <li>Добавьте границу вокруг изображения с помощью свойства border.</li>
  <li>Создайте стиль для списка ul с маркерами в виде квадратов.</li>
  <li>Установите ширину и высоту блока div с помощью свойств width и height.</li>
  <li>Создайте стиль для таблицы, который будет делать каждую вторую строку серой.</li>
  <li>Добавьте эффект перехода при наведении на кнопку с помощью свойства transition.</li>
  <li>Установите фоновое изображение для элемента с помощью свойства background-image.</li>
  <li>Создайте стиль для формы с полями для ввода текста и кнопкой отправки.</li>
  <li>Добавьте рамку вокруг текстового поля с помощью свойства outline.</li>
  <li>Установите выравнивание текста по центру в блоке div с помощью свойства text-align.</li>
  <li>Создайте стиль для выпадающего меню с помощью псевдоэлемента :hover.</li>
  <li>Добавьте тень на текст с помощью свойства text-shadow.</li>
  <li>Создайте стиль для анимации появления элемента на странице с помощью свойства opacity.</li>
  <li>Установите шрифт размером 18 пикселей для всех заголовков на странице.</li>
</ol>
<h1 style="text-align: center">Решения</h1>
<h2 style="text-align: center">Файл 1.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        
a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }

a:hover {
            color: #ff0000;
        }
        p {
            font-family: Arial, sans-serif;
        }
         h1 {
            color: red;
        }
        .container {
    display: flex;
}
.block {
    
    width: 100px;
    height: 100px;
    background-color: green;
    margin: 10px;
}
body {
    background-color: greenyellow;
    color: white;
}
.heading {
    color: red;
}
#heading-2 {
    color: blue;
}
#heading-3 {
    background-color: black;
}
#heading-4 {
    border: 2px solid black;
    border-radius: 10px;
}
#heading-5:hover {
    color: green;
}
.o-marker {
    list-style-type:circle;
}
.square-marker {
    color:black;
    list-style-type:square;
}
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    color: black;
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #000000;
}

th {
    background-color: #000000;
}
.box {
            width: 200px;
            height: 200px;
            background-color: #ffffff;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
    .box1 {
        color:#000000;
            width: 200px;
            height: 200px;
            background-color: #f2f2f2;
            padding: 20px;
        }
@keyframes blink 
{
    0% {
        background-color: white;
       }
    50% {
            background-color: red;
        }
    100%{
            background-color: white;
        }
}

        .blink-animation {
            animation: blink 1s infinite;
        }
        img {
            border: 2px solid black;
        }
    </style>
    <link rel="style" href="style.css">
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <p style="color:#000000">(1-7)</p>
    <h1 id="heading-1" class="heading">Hello world</h1>
    <h2 id="heading-2" class="heading">Hello world</h2>
    <h3 id="heading-3" class="heading">Hello world</h3>
    <h4 id="heading-4" class="heading">Hello world</h4>
    <h5 id="heading-5" class="heading">Hello world</h5>
    <h6 id="heading-6" class="heading">Hello world</h6>
    <p style="color:#000000">(8)</p>
    <label>
        <input type="text" placeholder="Текстовое поле">
    </label>
    <label>
        <input type="password" placeholder="Поле для пароля">
    </label>
    <label>
        <input type="number" placeholder="Числовое поле">
    </label>
    <label>
        <input type="email" placeholder="Поле для электронной почты">
    </label>
    <label>
        Флажок
        <input type="checkbox">
    </label>
    <label>
        Поле даты
        <input type="date">
    </label>
    <p style="color:#000000">(9)</p>
    <ol>
        <li>Нумерованный</li>
        <li>Нумерованный</li>
        <li>Нумерованный</li>
        <li>Нумерованный</li>
    </ol>
    <p style="color:#000000">(10)</p>
    <ul class="o-marker">
        <li>Маркированный</li>
        <li>Маркированный</li>
        <li>Маркированный</li>
        <li>Маркированный</li>
    </ul>
    <p style="color:#000000">(11)</p>
    <p>В детстве мама сказала, что Деда Мороза не существует. Теперь моя очередь сказать ей, что экстрасенсов не существует, гороскопы - херня, таро - ложь, а религия - сказки.</p>
    <p style="color:#000000">(12)</p>
    <div class="container">
        <div class="block">1</div>
        <div class="block">2</div>
        <div class="block">3</div>
        <div class="block">4</div>
        <div class="block">5</div>
        <div class="block">6</div>
    </div>
    <p style="color:#000000">(14)</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rF8KV1MCIS8?si=CDAHbiORxh1V7ZTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p style="color:#000000">(16)</p>
    <table>
        <thead>
        <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
            <th>Заголовок 3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Ячейка 1-1</td>
            <td>Ячейка 1-2</td>
            <td>Ячейка 1-3</td>
        </tr>
        <tr>
            <td>Ячейка 2-1</td>
            <td>Ячейка 2-2</td>
            <td>Ячейка 2-3</td>
        </tr>
        <tr>
            <td>Ячейка 3-1</td>
            <td>Ячейка 3-2</td>
            <td>Ячейка 3-3</td>
        </tr>
        </tbody>
    </table>
    <p style="color:#000000">(17)</p>
<h1>Заголовок</h1>
<p style="color:#000000">(18)</p>
<p>Один бизнесмен хотел жениться, но у него было три подружки, и он не знал какую из них выбрать. Решил их проверить: дал<br>каждой по 1000 долларов. Одна потратила все деньги на себя, другая купила что-то для хозяйства, а третья вложила в дело и <br>получила прибыль. Какую же из трех он выбрал? Ту, у которой грудь больше!</p>
<p style="color:#000000">(19)</p>
<div class="box"></div>
<p style="color:#000000">(20)</p>
body {<br>
    background-color: #f0f0f0;<br>
}<br>
<p style="color:#000000">(21)</p>
<div class="blink-animation">Hello</div>
<p style="color:#000000">(22)</p>
<div class="box1">Пример блока с отступами</div>
<p style="color:#000000">(23)</p><br>
<a href="#">ССЫЛКА</a>

<p style="color:#000000">(24)</p>
<img src="https://гипермаркетпраздника.рф/wa-data/public/shop/products/33/24/22433/images/20434/20434.970.jpg" alt="">
<p style="color:#000000">(25)</p>
<ul class="square-marker">
    <li>Маркированный</li>
    <li>Маркированный</li>
    <li>Маркированный</li>
    <li>Маркированный</li>
</ul>
</body>
</html>
```

<h2 style="text-align: center">Файл 2.html</h2>
<h2 style="text-align: center">Файл 3.html</h2>
<h2 style="text-align: center">Файл 4.html</h2>
<h2 style="text-align: center">Файл 5.html</h2>
<h2 style="text-align: center">Файл 6.html</h2>
<h1 align = "center">Вывод</h1>
<p>По итогу проделанной лабораторной работы, были созданы 36 страниц по заданиям с использованием HTML, CSS</p>
