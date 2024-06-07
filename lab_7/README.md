<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Гусев Владислав Михайлович</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №7.«CSS»</strong><br>01.03.02 Прикладная математика и информатика</p>
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
    <li>Повторить по образцу, то есть сделать такой же макет используя материалы из архива lab7.zip</li>
</ol>



<h1 style="text-align: center">Решения HTML</h1>

<h2 style="text-align: center">Файл index.html</h2>

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="root.css">
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="banner.css">
    <link rel="stylesheet" href="content.css">
    <link rel="stylesheet" href="widget-info.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css?family=Arvo:400,700|Cookie" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>Lesson</title>
</head>
<body>

<div class="container">
    <div class="header">
        <div class="navbar">
            <div class="navbar__logo">
                <span class="font_dancing-script font_dancing-script_logo">Elysa4t</span>
            </div>
            <div class="navbar__links">
                <a class="navbar__link navbar__link_selected" href=""><span class="navbar__link-text">Home</span></a>
                <a class="navbar__link" href="#"><span class="navbar__link-text">Archives</span></a>
                <a class="navbar__link" href="#"><span class="navbar__link-text">Gallery</span></a>
                <a class="navbar__link" href="#"><span class="navbar__link-text">About</span></a>
                <a class="navbar__link" href="#"><span class="navbar__link-text">Contact</span></a>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="banner">
        <img class="banner__image" src="/assets/banner-image.jpg" alt="">
        <p class="banner__label font_dancing-script font_dancing-script_label">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</p>
    </div>
</div>

<div class="container">
    <div class="content">
        <div class="content__block">
            <div class="content__mark">
                <p>Posted by <span style="text-decoration: underline">Someone</span> on April 14, 2012</p>
            </div>
            <div class="content__body">
                <h2 class="content__title">Lorem ipsum dolor sit amet.</h2>
                <img class="content__img" src="/assets/pics01.jpg" alt="">
                <p class="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi culpa cum cumque deleniti dignissimos eaque eius enim eos est expedita facere facilis harum incidunt ipsa iste, maxime nam nemo perferendis praesentium quas sapiente sed veritatis voluptas, voluptatem voluptatum? Ducimus explicabo fugit obcaecati sit tempore. Distinctio iure officiis tempore!</p>

                <div class="content__info">
                    <div class="content__categories">Posted in
                        <span class="content__category">News</span>,
                        <span class="content__category">Design</span>,
                        <span class="content__category">Other</span>
                    </div>
                    <div class="content__comment">235 Comments</div>
                </div>

            </div>
        </div>

        <div class="content__menu">
            <div class="content-menu__top"></div>
            <div class="content-menu__block">
                <div class="content__mark">About Elysa4t</div>
                <div class="content-menu__wrapper">
                    <p class="content-menu__text" style="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum,
                        voluptatum, velit voluptatibus</p>
                </div>
            </div>
            <div class="content-menu__block">
                <div class="content__mark">Recent Post</div>
                <div class="content-menu__wrapper">
                    <p class="content-menu__last-post">Lorem ipsum dolor sit amet.</p>
                    <p class="content-menu__last-post">Lorem ipsum dolor sit amet.</p>
                    <p class="content-menu__last-post">Lorem ipsum dolor sit amet.</p>
                    <p class="content-menu__last-post">Lorem ipsum dolor sit amet.</p>
                    <p class="content-menu__last-post">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="content-menu__block">
                <div class="content__mark">Something Else</div>
                <div class="content-menu__wrapper">
                    <p class="content-menu__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur debitis est fugit illo nostrum!
                    </p>
                </div>
            </div>
            <div class="content-menu__bottom"></div>
        </div>

    </div>
</div>
<div class="container">
    <div class="widgets-info__wrapper">
        <div class="widgets-info">
            <div class="widget-info">
                <div class="widget-info__top"></div>
                <div class="widget-info__content">
                    <div class="widget-info__title">Lorem ipsum dolor.</div>
                    <div class="widget-info__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor ex expedita incidunt laborum numquam odit pariatur reiciendis tempora ullam.</div>
                </div>
                <div class="widget-info__bottom"></div>
            </div>
            <div class="widget-info">
                <div class="widget-info__top"></div>
                <div class="widget-info__content">
                    <div class="widget-info__title">Lorem ipsum dolor.</div>
                    <div class="widget-info__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor ex expedita incidunt laborum numquam odit pariatur reiciendis tempora ullam.</div>
                </div>
                <div class="widget-info__bottom"></div>
            </div>
            <div class="widget-info">
                <div class="widget-info__top"></div>
                <div class="widget-info__content">
                    <div class="widget-info__title">Lorem ipsum dolor.</div>
                    <div class="widget-info__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor ex expedita incidunt laborum numquam odit pariatur reiciendis tempora ullam.</div>
                </div>
                <div class="widget-info__bottom"></div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="copyright">© Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laboriosam magni molestias neque sunt voluptas.</div>
</div>
</body>
</html>
```
<h2 style="text-align: center">banner.css</h2>

```css
.container:has(>.banner) {
    background-color: rgb(235,198,198);
}

.banner {
    width: var(--width);
    display: flex;
    position: relative;
    justify-content: center;
    margin: 40px 0;
}

.banner__image {
    width: 100%;
    position: relative;
    border-image: url("assets/banner-border-bg.png");
    border-radius: var(--borderRaund);
}

.banner__label {
    bottom: 0;
    background-image: url("assets/banner-caption-bg.png");
    position: absolute;
    width: 100%;
    height: 63px;
    border-bottom-right-radius: var(--borderRaund);
    border-bottom-left-radius: var(--borderRaund);
    text-align: center;
    line-height: 60px;
}
```
<h2 style="text-align: center">content.css</h2>

```css
.container:has(>.content) {
    background-color: rgb(240, 215, 215);
}
.content {
    display: grid;
    grid-template-columns: 2.1fr 1fr;
    margin: 30px 0 30px 0;
    grid-gap: 30px;
    width: var(--width);
}

.content__body {
    padding: 90px 30px 30px 30px;
    margin-bottom: 70px;
}

.content__block {
    display: inline-block;
    position: relative;
    background-color: white;
    border-radius: 5px;
}

.content__img {
    width: 100%;
    margin: 20px 0;
    border-radius: var(--borderRaund);
}

.content__info {
    display: flex;
    position: absolute;
    bottom: 30px;
    width: calc(100% - 60px);
    background-color: rgb(240, 215, 215);
    border-radius: 5px;
    padding: 20px;
    margin-top: 30px;
    justify-content: space-between;
}

.content__info .content__comment {
    text-decoration: underline;
}

.content__category {
    text-decoration: underline;
}

.content__mark {

    position: absolute;
    width: 330px;
    padding-top: 10px;
    padding-bottom: 25px;
    padding-left: 20px;
    background-image: url("assets/sidebar-title-bg.png");
    background-size: 100% 100%;
    max-height: 30px;
    top: 20px;
    left: 0;

    font-family: 'Arvo', serif;
    color: white;
    font-size: 16px;
    font-weight: 400;
}

.content__menu {
    background-image: url('assets/p.png');
    border-radius: 5px;
    height: fit-content;
}

.content__text {
    line-height: 190%;
}
.font_dancing-script {

    text-align: center;
    text-decoration: none;
    font-weight: normal;
    font-family: 'Cookie', cursive;
    color: #FFFFFF;
}
.font_dancing-script_logo {
    font-weight: 700;
    font-size: 50px;
}

.font_dancing-script_label {
    font-size: 35px;
}

.content-menu__block {
    position: relative;
    padding-top: 80px;
}
.content-menu__block:last-child {
    padding-bottom: 30px;
}

.content-menu__last-post {
    color: white;
    padding: 5px 0;
    border-bottom: #0000005c solid;
}
.content-menu__last-post:last-child {
    border-bottom: none;
}
.content-menu__wrapper {
    padding: 0 30px;
}
.content-menu__text {
    color: var(--textcolor);
    line-height: 160%;
    font-size: 15px;
}
.content-menu__top {
    height: 15px;
    background: url(assets/sidebar-bg-01.png);
}

.content-menu__bottom {
    margin-top: 20px;
    height: 15px;
    background: url(assets/sidebar-bg-03.png);
}

.content__title {
    display: block;
    font-weight: 400;
    letter-spacing: -2px;
    font-family: 'Arvo', serif;
    font-size: 34px;
    color: #4E2B22;
}

```
<h2 style="text-align: center">navbar.css</h2>

```css
.container:has(>.header) {
    background-image: url("assets/header-wrapper-bg.png");
    height: 187px;
}

.header {
    width: var(--width);
}

.navbar {
    width: 100%;
    padding: 41px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar__logo {
    background-image: url("assets/logo-bg.png");
    background-size: 100% 100%;
    border-radius: var(--borderRaund);
    padding: 22px;
    margin-right: 150px;
}

.navbar__link {
    color: white;
    text-decoration: none;
    background-size: 100% 100%;
    border-radius: var(--borderRaund);
    font-size: 1.1em;
    display: block;
}

.navbar__link_selected {
    background: url(assets/menu-first-bgleft.png) no-repeat left top;
}
.navbar__links {
    display: flex;
    flex-direction: row;
    gap: 25px;
}
.navbar__link-text {
    height: 40px;
    padding: 8px 20px 8px 20px;
    display: block;
}
.navbar__link_selected>.navbar__link-text {
    background: url(assets/menu-first-bgright.png) no-repeat right top;
}
```
<h2 style="text-align: center">root.css</h2>

```css
:root {
    --width: 960px;
    --borderRaund: 10px;
    --textcolor: #E1C9C4;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
}
```
<h2 style="text-align: center">widget-info.css</h2>

```css
.container:has(>.widgets-info__wrapper) {
    background: url(assets/footer-content-bg-01.png) repeat;
}

.widgets-info__wrapper {
    width: 100%;
    overflow: hidden;
    padding: 40px 0 30px 0;
    background: url(assets/footer-content-bg-02.png) repeat-x left top;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.widgets-info {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 30px 0;
    justify-content: space-between;
    width: var(--width);
}
.widget-info {
    width: 300px;
}

.widget-info__title {
    padding-bottom: 20px;
}
.widget-info__body {
    color: #E1C9C4;
}

.container:has(>.copyright) {
    overflow: hidden;
    height: 155px;
    background: url(assets/footer-bg.png);
}

.copyright {
    margin: 0px;
    padding: 40px 0px 0px 0px;
    text-shadow: 1px 1px 2px rgba(39, 20, 17, 1);
    text-align: center;
    color: #784F45;
}

.widget-info__top {
    height: 15px;
    background: url(assets/box-widget-bg-01.png);
}
.widget-info__bottom {
    height: 15px;
    background: url(assets/box-widget-bg-03.png);
}
.widget-info__content {
    padding: 20px 30px 10px 30px;
    background: url(assets/box-widget-bg-02.png);
    color: white;
}
```

<h1 align = "center">Результат HTML</h1>

<ol>
    <li>
    <div style="display: flex; flex-direction: column">
        <div>Повторить по образцу, то есть сделать такой же макет используя материалы из архива lab7.zip</div>
        <img height=900px" width="700px" src="report/1.png">
    </div>
  </li>
</ol>

<h1 align = "center">Вывод</h1>
<p>По итогу проделанной лабораторной работы, были созданы 35 страниц по заданиям HTML и 15 страниц по заданиям CSS</p>
