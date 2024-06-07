<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Гусев Владислав Михайлович</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №6.«CSS»</strong><br>01.03.02 Прикладная математика и информатика</p>
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
  <li>Придумайте селектор, который выберет абзацы &lt;p&gt; внутри дивов &lt;div&gt;.</li>
  <li>Придумайте селектор, который выберет все &lt;h2&gt; внутри дивов &lt;div&gt;.</li>
  <li>Придумайте селектор, который выберет все абзацы &lt;p&gt; из элемента с id=test.</li>
  <li>Придумайте селектор, который выберет все &lt;h2&gt; из элемента с id=test.</li>
  <li>Выберите все элементы с классом bbb.</li>
  <li>Выберите все элементы с классом bbb из элемента с id=test.</li>
  <li>Выберите все абзацы &lt;p&gt; с классом bbb.</li>
  <li>Выберите все &lt;h2&gt; с классом bbb.</li>
  <li>Выберите все абзацы &lt;p&gt; с классом bbb из элемента с id=test.</li>
  <li>Выберите все элементы с классом bbb и элементы с классом xxx одновременно.</li>
  <li>Выберите все абзацы &lt;p&gt; с классом bbb и &lt;h2&gt; с классом xxx одновременно.</li>
  <li>Выберите все абзацы &lt;p&gt; с классом bbb из id=test и все абзацы &lt;p&gt; с классом xxx из id=test одновременно.</li>
  <li>Выберите все элементы из класса fff.</li>
  <li>Выберите все абзацы &lt;p&gt; из класса fff.</li>
  <li>Выберите все абзацы &lt;p&gt; с классом fff.</li>
  <li>Выберите все элементы с классом bbb из класса fff.</li>
  <li>Выберите все &lt;h2&gt; с классом bbb из класса fff.</li>
  <li>Сделайте селектор, который выберет все ссылки из id=test, с состояния link и visited сделайте неподчеркнутыми и красными, а состояние hover - подчеркнутым и голубым.</li>
  <li>Сделайте селектор, который выберет все ссылки с классом www, состояния link и visited сделайте подчеркнутыми и голубыми, а состояние hover - неподчеркнутым.</li>
  <li>Сделайте селектор, который выберет все ссылки из id=test с классом www. Цвета состояний выберите самостоятельно.</li>
  <li>Сделайте селектор, который выберет все ссылки из class=eee с классом www. Цвета состояний выберите самостоятельно.</li>
  <li>Повторите страницу по данному по образцу:</li>
  <li>Повторите страницу по данному по образцу:</li>
  <li>Повторите страницу по данному по образцу:</li>
  <li>Повторите страницу по данному по образцу:</li>
  <li>Повторите страницу по данному по образцу:</li>
  <li>Повторите страницу по данному по образцу:</li>
  <li>Решить задачу на сайте https://www.codewars.com/kata/555de49a04b7d1c13c00000e</li>
  <li>Решить задачу на сайте https://www.codewars.com/kata/588453ea56daa4af920000ca</li>
  <li>Решить задачу на сайте https://www.codewars.com/kata/55e9529cbdc3b29d8c000016</li>
  <li>Решить задачу на сайте https://www.codewars.com/kata/55968ab32cf633c3f8000008</li>
  <li>Решить задачу на сайте https://www.codewars.com/kata/55ee3ebff71e82a30000006a</li>
  <li>Решить задачу на сайте https://www.codewars.com/kata/5412509bd436bd33920011bc</li>
</ol>



<h1 style="text-align: center">Решения CSS</h1>

<h2 style="text-align: center">Файл 1.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    div p {
        color: red;
    }
</style>
<body>
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur eos, eum, exercitationem fugit in iure laborum necessitatibus numquam odio omnis repellendus voluptas? Consectetur distinctio fugit iste ratione unde.</p>
</div>
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
<style>
    div h2 {
        color: red;
    }
</style>
<body>
<div>
    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur eos, eum, exercitationem fugit in iure laborum necessitatibus numquam odio omnis repellendus voluptas? Consectetur distinctio fugit iste ratione unde.</h2>
</div>
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
<style>
    #test p {
        color: red;
    }
</style>
<body>
<div id="test">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur eos, eum, exercitationem fugit in iure laborum necessitatibus numquam odio omnis repellendus voluptas? Consectetur distinctio fugit iste ratione unde.</p>
</div>
</body>
</html>
```

<h2 style="text-align: center">Файл 4.html</h2>

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    #test h2 {
        color: red;
    }
</style>
<body>
<div id="test">
    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur eos, eum, exercitationem fugit in iure laborum necessitatibus numquam odio omnis repellendus voluptas? Consectetur distinctio fugit iste ratione unde.</h2>
</div>
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
<style>
    .bbb {
        color:forestgreen;
    }
</style>
<body>
<div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
<div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
<div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
<div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
<div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
<div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
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
<style>
    #test .bbb {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
    <div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
    <div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
    <div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
    <div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
    <div class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</div>
</div>
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
<style>
    p.bbb {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
</div>
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
<style>
    h2.bbb {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
</div>
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
<style>
    #test p.bbb {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
</div>
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
<style>
    .bbb, .xxx {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
</div>
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
<style>
    p.bbb, h2.xxx {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <h2 class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
    <h2 class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</h2>
</div>
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
<style>
    #test p.bbb, #test p.xxx {
        color:forestgreen;
    }
</style>
<body>
<div id="test">
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
    <p class="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem deleniti dolore inventore libero minus porro, quod tempore unde vitae.</p>
</div>
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
<style>
    .fff * {
        color: aqua;
    }
</style>
<body>
<div class="fff">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem cupiditate ducimus enim et facere, hic natus odio repellendus saepe? Assumenda dolorem facere minima nam quos, vero voluptate.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem cupiditate ducimus enim et facere, hic natus odio repellendus saepe? Assumenda dolorem facere minima nam quos, vero voluptate.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem cupiditate ducimus enim et facere, hic natus odio repellendus saepe? Assumenda dolorem facere minima nam quos, vero voluptate.</p>
</div>
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
<style>
    .fff p {
        color: aqua;
    }
</style>
<body>
<div class="fff">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem cupiditate ducimus enim et facere, hic natus odio repellendus saepe? Assumenda dolorem facere minima nam quos, vero voluptate.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem cupiditate ducimus enim et facere, hic natus odio repellendus saepe? Assumenda dolorem facere minima nam quos, vero voluptate.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque autem cupiditate ducimus enim et facere, hic natus odio repellendus saepe? Assumenda dolorem facere minima nam quos, vero voluptate.</p>
</div>
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
    <style>
        p.fff {
            color:darkblue;
        }
    </style>
</head>
<body>
<p class="fff">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias autem beatae, consequatur deserunt, dolorem dolorum eligendi eum expedita fuga hic itaque maxime nostrum quae quaerat quis quod sequi voluptatibus!</p>
<p class="fff">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias autem beatae, consequatur deserunt, dolorem dolorum eligendi eum expedita fuga hic itaque maxime nostrum quae quaerat quis quod sequi voluptatibus!</p>
<p class="fff">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias autem beatae, consequatur deserunt, dolorem dolorum eligendi eum expedita fuga hic itaque maxime nostrum quae quaerat quis quod sequi voluptatibus!</p>
<p class="fff">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias autem beatae, consequatur deserunt, dolorem dolorum eligendi eum expedita fuga hic itaque maxime nostrum quae quaerat quis quod sequi voluptatibus!</p>
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
    <style>
        .fff .bbb {
            color: brown;
        }
    </style>
</head>
<body>
<div class="fff">
    <div class="bbb">Lorem ipsum dolor.</div>
    <div class="bbb">Lorem ipsum dolor.</div>
    <div class="bbb">Lorem ipsum dolor.</div>
    <div class="bbb">Lorem ipsum dolor.</div>
</div>
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
    <style>
        .fff h2.bbb {
            color:rebeccapurple;
        }
    </style>
</head>
<body>
<div class="fff">
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque beatae culpa cumque, cupiditate dignissimos expedita facere itaque, labore laboriosam natus nemo non provident quas reprehenderit, sint veritatis voluptate voluptatibus.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque beatae culpa cumque, cupiditate dignissimos expedita facere itaque, labore laboriosam natus nemo non provident quas reprehenderit, sint veritatis voluptate voluptatibus.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque beatae culpa cumque, cupiditate dignissimos expedita facere itaque, labore laboriosam natus nemo non provident quas reprehenderit, sint veritatis voluptate voluptatibus.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque beatae culpa cumque, cupiditate dignissimos expedita facere itaque, labore laboriosam natus nemo non provident quas reprehenderit, sint veritatis voluptate voluptatibus.</h2>
    <h2 class="bbb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque beatae culpa cumque, cupiditate dignissimos expedita facere itaque, labore laboriosam natus nemo non provident quas reprehenderit, sint veritatis voluptate voluptatibus.</h2>
</div>
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
    <style>
        #test a:link,
        #test a:visited {
            text-decoration: none;
            color: red;
        }

        #test a:hover {
            text-decoration: underline;
            color: #4d4dff;
        }
    </style>
</head>
<body>
<div id="test">
    <p>Это обычный текст.</p>
    <p>А вот <a href="#">ссылка</a> внутри элемента с id=test.</p>
    <p>И еще одна <a href="#">ссылка</a> здесь.</p>
</div>
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
    <style>
        a.www:link,
        a.www:visited {
            text-decoration: underline;
            color: #5959ff;
        }

        a.www:hover {
            text-decoration: none;
        }
    </style>
</head>
<body>
<a href="#" class="www">Ссылка 1</a>
<a href="#" class="www">Ссылка 2</a>
<a href="#">Обычная ссылка</a>
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
    <style>
        #test a.www {
            color: purple;
            text-decoration: dashed;
        }

        #test a.www:visited {
            color: green;
        }

        #test a.www:hover {
            color: red;
            text-decoration: underline;
        }
    </style>
</head>
<body>
<div id="test">
    <a href="#" class="www">Ссылка 1</a>
    <a href="#" class="www">Ссылка 2</a>
    <a href="#">Обычная ссылка</a>
</div>
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
    <style>
        .eee a.www {
            color: purple;
            text-decoration: dashed;
        }

        .eee a.www:visited {
            color: green;
        }

        .eee a.www:hover {
            color: red;
            text-decoration: underline;
        }
    </style>
</head>
<body>
<div class="eee">
    <a href="#" class="www">Ссылка 1</a>
    <a href="#" class="www">Ссылка 2</a>
    <a href="#">Обычная ссылка</a>
</div>
<div class="eee">
    <a href="#" class="www">Ссылка 3</a>
    <a href="#" class="www">Ссылка 4</a>
</div>
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
    <style>
        body {
            border-style: dotted;
            border-color: gray;
        }

        .underline {
            text-decoration: underline;
        }

        .strike {
            text-decoration: line-through;
            text-decoration-color: gray;
            text-decoration-thickness: 2px;
        }

        .overline {
            text-decoration: overline;
            text-decoration-color: gray;
            text-decoration-thickness: 2px;
        }
    </style>
</head>
<body>
<p class="underline">Привет, мир!</p>
<p class="strike">Привет, мир!</p>
<p class="overline">Привет, мир!</p>
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
    <style>
        body {
            border-style: dotted;
            border-color: gray;
        }
        .square {
            border: solid 1px red;
            width: 100px;
            height: 100px;
            margin: 10px;
        }
    </style>
</head>
<body>
<div class="square"></div>
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
    <style>
        body {
            border-style: dotted;
            border-color: gray;
        }
        .square {
            border: dotted 1px blue;
            width: 400px;
            height: 100px;
            margin: 10px;
        }
    </style>
</head>
<body>
<div class="square"></div>
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
    <style>
        body {
            border-style: dotted;
            border-color: gray;
        }
        .square {
            border: dotted 1px green;
            width: 350px;
            height: 350px;
            margin: 10px;
            border-radius: 10px 30px;
        }
    </style>
</head>
<body>
<div class="square"></div>
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
    <style>
        body {
            border-style: dotted;
            border-color: gray;
        }
        .round {
            border: solid 1px red;
            width: 100px;
            height: 100px;
            margin: 10px;
            border-radius: 50%;
        }
    </style>
</head>
<body>
<div class="round"></div>
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
    <style>
        body {
            border-style: dotted;
            border-color: gray;
        }
        .underline {
            text-decoration: underline;
        }

        .green {
            color: green;
        }

        .red {
            color: red;
        }

        .black {
            color: black;
            text-decoration: none;
        }
    </style>
</head>
<body>
<div style="display: flex;flex-direction: column; margin: 20px; gap:20px;">
    <a href="#" class="underline green">Ссылка 1</a>
    <a href="#" class="underline red">Ссылка 2</a>
    <a href="#" class="black">Ссылка 3</a>
</div>

</body>
</html>
```

<h2 style="text-align: center">Файл 28.js</h2>

```js
function add() {
    if (arguments.length == 0) {
        return 0;
    }

    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i]/(i+1);
    }

    return Math.round(res);
}
```

<h2 style="text-align: center">Файл 29.js</h2>

```js
function arrayPacking(a) {
    return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}
```

<h2 style="text-align: center">Файл 30.js</h2>

```js
function charToAscii(string) {
    string = string.replace(/[^A-Za-zА-Яа-я]/g, '');

    if (string.length <= 0) {
        return null;
    }

    let res = {};

    for (let key in string) {console.log(string[key])
        if (res[string[key]] !== undefined) {
            continue;
        }

        res[string[key]] = string[key].charCodeAt(0);
    }

    return res;
}
```

<h2 style="text-align: center">Файл 31.js</h2>

```js
function initials(n){
    let arr = n.toLocaleUpperCase().split(' ');
    let f = arr.slice(-1)[0].charAt(0) + arr.slice(-1)[0].slice(1).toLocaleLowerCase();
    let fn = arr.slice(0,(arr.length - 1)).map((x) => x.charAt(0)).join('.');
    return fn + '.' + f;
}
```

<h2 style="text-align: center">Файл 32.js</h2>

```js
function titleToNumber(title) {
    return title.split('').map(x => x.charCodeAt(0)-64).reduce((x, y)=> x * 26 + y);
}
```

<h2 style="text-align: center">Файл 33.js</h2>

```js
function maskify(cc) {
    return cc.slice(0,-4).replace(/./gi, '#') + cc.slice(-4)
}
```


<h1 align = "center">Результат HTML</h1>

<ol>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Придумайте селектор, который выберет абзацы &lt;p&gt; внутри дивов &lt;div&gt;.</div>
        <img height="300px" width="400px" src="report/1.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Придумайте селектор, который выберет все &lt;h2&gt; внутри дивов &lt;div&gt;.</div>
        <img height="100px" width="400px" src="report/2.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Придумайте селектор, который выберет все абзацы &lt;p&gt; из элемента с id=test.</div>
        <img height="100px" width="400px" src="report/3.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Придумайте селектор, который выберет все &lt;h2&gt; из элемента с id=test.</div>
        <img height="100px" width="400px" src="report/4.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все элементы с классом bbb.</div>
        <img height="100px" width="400px" src="report/5.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все элементы с классом bbb из элемента с id=test.</div>
        <img height="100px" width="400px" src="report/6.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все абзацы &lt;p&gt; с классом bbb.</div>
        <img height="100px" width="400px" src="report/7.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div> Выберите все &lt;h2&gt; с классом bbb.</div>
        <img height="100px" width="400px" src="report/8.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все абзацы &lt;p&gt; с классом bbb из элемента с id=test.</div>
        <img height="100px" width="400px" src="report/9.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все элементы с классом bbb и элементы с классом xxx одновременно.</div>
        <img height="100px" width="400px" src="report/10.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все абзацы &lt;p&gt; с классом bbb и &lt;h2&gt; с классом xxx одновременно.</div>
        <img height="100px" width="400px" src="report/11.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все абзацы &lt;p&gt; с классом bbb из id=test и все абзацы &lt;p&gt; с классом xxx из id=test одновременно.</div>
        <img height="100px" width="400px" src="report/12.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все элементы из класса fff.</div>
        <img height="100px" width="400px" src="report/13.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все абзацы &lt;p&gt; из класса fff.</div>
        <img height="100px" width="400px" src="report/14.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все абзацы &lt;p&gt; с классом fff.</div>
        <img height="100px" width="700px" src="report/15.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все элементы с классом bbb из класса fff.</div>
        <img height="100px" width="700px" src="report/16.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Выберите все &lt;h2&gt; с классом bbb из класса fff.</div>
        <img height="100px" width="400px" src="report/17.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Сделайте селектор, который выберет все ссылки из id=test, с состояния link и visited сделайте неподчеркнутыми и красными, а состояние hover - подчеркнутым и голубым.</div>
        <img height="150px" width="200px" src="report/18.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Сделайте селектор, который выберет все ссылки с классом www, состояния link и visited сделайте подчеркнутыми и голубыми, а состояние hover - неподчеркнутым.</div>
        <img height="100px" width="400px" src="report/19.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Сделайте селектор, который выберет все ссылки из id=test с классом www. Цвета состояний выберите самостоятельно.</div>
        <img height="100px" width="700px" src="report/20.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Сделайте селектор, который выберет все ссылки из class=eee с классом www. Цвета состояний выберите самостоятельно.</div>
        <img height="100px" width="400px" src="report/21.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div> Повторите страницу по данному по образцу:</div>
        <img height="200px" width="200px" src="report/22.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Повторите страницу по данному по образцу:</div>
        <img height="100px" width="400px" src="report/23.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Повторите страницу по данному по образцу:</div>
        <img height="150px" width="400px" src="report/24.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Повторите страницу по данному по образцу:</div>
        <img height="150px" width="400px" src="report/25.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Повторите страницу по данному по образцу:</div>
        <img height="150px" width="400px" src="report/26.png">
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
        <div>Повторите страницу по данному по образцу:</div>
        <img height="150px" width="400px" src="report/27.png">
    </div>
  </li>
<li>
    <div style="display: flex; flex-direction: column">
        <div>Решить задачу на сайте https://www.codewars.com/kata/555de49a04b7d1c13c00000e</div>
        <img height="150px" width="400px" src="report/28.png">
    </div>
  </li>
<li>
    <div style="display: flex; flex-direction: column">
        <div>Решить задачу на сайте https://www.codewars.com/kata/588453ea56daa4af920000ca</div>
        <img height="150px" width="400px" src="report/29.png">
    </div>
  </li>
<li>
    <div style="display: flex; flex-direction: column">
        <div>Решить задачу на сайте https://www.codewars.com/kata/55e9529cbdc3b29d8c000016</div>
        <img height="150px" width="400px" src="report/30.png">
    </div>
  </li>
<li>
    <div style="display: flex; flex-direction: column">
        <div>Решить задачу на сайте https://www.codewars.com/kata/55968ab32cf633c3f8000008</div>
        <img height="150px" width="400px" src="report/31.png">
    </div>
  </li>
<li>
    <div style="display: flex; flex-direction: column">
        <div>Решить задачу на сайте https://www.codewars.com/kata/55ee3ebff71e82a30000006a</div>
        <img height="150px" width="400px" src="report/32.png">
    </div>
  </li>
<li>
    <div style="display: flex; flex-direction: column">
        <div>Решить задачу на сайте https://www.codewars.com/kata/5412509bd436bd33920011bc</div>
        <img height="150px" width="400px" src="report/33.png">
    </div>
  </li>
</ol>

<h1 align = "center">Вывод</h1>
<p>В ходе выполнения лабораторной работы по CSS были рассмотрены различные селекторы, которые позволяют выбирать и стилизовать определенные элементы на веб-странице.</p>
