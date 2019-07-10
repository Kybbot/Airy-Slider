<h1>Airy-Slider - javascript слайдер.</h1>
<p>JavaScript слайдер написанный при помощи ооп.</p>
<h2>Быстрый старт</h2>
<ul>
	<li><a href="https://github.com/Kybbot/Airy-Slider/archive/master.zip">Скачать</a> Airy-Slider с GitHub.</li>
	<li>Добавить <b>css</b> стили вверху вашей разметки: 
  
  ```html 
    <link rel="stylesheet" href="css/airy.slider.min.css">
  ```
  
  </li>
	<li>Добавить <b>script</b> внизу вашей разметки: 
  
  ```html 
    <script src="js/airy.slider.min.js"></script> 
  ```
  
  </li>
</ul>
<h2>Использование</h2>
<p>Создать div элемент с классом <b>airy-slider</b> и добавить ему id с любым именем. Всем элементам внутри div контейнера присвоить класс <b>airy-slider-item</b>.</p>

```html 
<div class="airy-slider" id="id">
  <div class="airy-slider-item"> Ваш контент </div>
  <div class="airy-slider-item"> Ваш контент </div>
  <div class="airy-slider-item"> Ваш контент </div>
  <div class="airy-slider-item"> Ваш контент </div>
</div>
```

<p>В javascript файле создать объект через <b>new</b> и вызвать функцию <b>start</b>. Так же можно отредактировать настройки под себя.</p>

```html
new Airy('id', {
  dots: true,
  loop: false,
  speed: 1000
}).start();
```

<h3>Настройки</h3>
<b>dots</b>

```html
Тип: Boolean
По умолчанию: true
Показывает точечную навигацию.
```
<hr>
<b>loop</b>

```html
Тип: Boolean
По умолчанию: false
Бесконечный цикл. Дублируйте последние и первые элементы, чтобы получить иллюзию петли.
```
<hr>
<b>speed</b>

```html
Тип: Number
По умолчанию: 1000
Скорость показа слайдов.
```
