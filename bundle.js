'use strict';
//Сборщик rollup:
// npm i -g rollup //установка ролап - сборщик(bundle) через терминал,
// его документация - https://rollupjs.org/introduction/:
//в терминале указываем какой файл входной, и какой выходной и формат: 
// rollup 13dom_advans_modul.js --file bundle.js --format iife
//выкидывает неиспользуемый код (const a = 1)
//rollup main.js --file bundle.js --format umd --name "myBundle" - формат сборщика для устаревших браузеров
//Не поддерживает await на верхнем уровне - вызывает ошибку (поэтому его нужно перед сборкой 
//закоментировать - если он вообще не нужен)
//Не забывать прописывать в html для созданного файла bundle.js defer

//ES6 модули (этот скрипт в файле index прописывать не надо):
function add(x, y){
    return x + y
}const b = 89;
console.log(b);//Выполнится первым, а лишь затем все остальное в файле куда был export
console.log('testES6');
setTimeout(()=> {//Меняем функцию add на умножение через 6 сек
    add = function(x, y){
        return x*y
    };
}, 6000);
// export const res = await getProd();//Здесь await работать будет (в ES6 модулях он 
// //не вызывает ошибки - await на верхнем уровне)

//Обращение к элементам:
console.log(document);//Корневой документ (корневая нода документа) у которого можно получать внутренние свойства:
console.log(document.head);
console.log(document.head.textContent);
console.log(document.body);
console.log(document.documentElement);//Элемент документа - html
console.log(document.documentElement.lang);
const body = document.querySelector('body');
const elem = document.querySelector('.err');
console.log(elem);//Выводит первый втретившийся в документе элемент с .err
const elem2 = document.querySelectorAll('.err');
console.log(elem2);//Выводит массив имеющихся в документе элементов .err
const elem3 = document.querySelectorAll('meta');
console.log(elem3);//Выводит массив имеющихся в документе элементов meta
const elem4 = document.getElementById('idd');//Обращение к элементу по id
console.log(elem4);//Выводит первый втретившийся в документе элемент с id="idd"
const elem5 = document.getElementsByClassName('err');//Обращение к элементу по названию класса
console.log(elem5);//Выводит массив (HTMLCollection) всех имеющихся в документе элементов с классом err:
console.log(elem5[0]);
console.log(elem5[1]);
const elem6 = document.getElementsByTagName('meta');//Обращение к элементу по названию тэга
console.log(elem6);//Выводит массив (HTMLCollection) имеющихся в документе тэгов meta
//Взаимодействие с элементами:
const newEl = document.createElement('button');//Создание нового элемента - кнопки (можно создать любой элемент - div, ul, select и т.д.)
newEl.innerText = 'newEl1';
const newEl2 = document.createElement('select');
newEl2.innerHTML = '<option value=1>newEl2</option>';//Добавляем значения в список select
const newEl3 = document.createElement('button');
newEl3.innerText = 'newEl3';
const newEl4 = document.createElement('button');
newEl4.innerText = 'newEl4';
newEl4.setAttribute('name', 'newEl4');//Добавление атрибута name
elem5[1].classList.add('ggg');//Добавление класса к элементу
console.log(elem5[1].textContent);//Получение текста имеющегося в элементе
elem5[1].append(newEl);//Добавление ребенка (внутрь элемента) в конец
elem5[1].prepend(newEl2);//Добавление ребенка (внутрь элемента) в начало
elem5[1].before(newEl3);//Добавление элемента перед элементом
elem5[1].after(newEl4);//Добавление элемента после элемента
function generate(event){//Срабатывает на onclick в html
    newEl4.style.backgroundColor = 'red';
    let form = event.target;//Присваеваем переменной значение самого элемента
    console.log(form.parentNode);//Выводим родителя элемента на который был click
    form.parentNode.children[3].style.backgroundColor = 'green';//Сперва поднимаемся до родителя элемента, затем возвращаемся до его 3 ребенка и окрашиваем его
    console.log(`Координаты х: ${window.pageXOffset}`);//Показывает текущие координаты вьюпорта элемента на который был click (для старых браузеров)
    console.log(`Координаты y: ${window.scrollY}`);//Для новых браузеров
    console.log(`Ширина экрана: ${document.documentElement.clientWidth}`);
    console.log(`Высота экрана: ${document.documentElement.clientHeight}`);
    console.log(event.target.getBoundingClientRect());//Показывает координаты и характеристики элемента на который был click относительно вьюпорта
    const down = document.querySelector('.down');
    const coordDown = down.getBoundingClientRect();
    console.log(down.getBoundingClientRect());//Показывает координаты и характеристики элемента .down относительно вьюпорта
    // window.scrollTo({//Скрол от нажатого элемента button к элементу .down (для старых браузеров)
    //     left: window.pageXOffset + coordDown.left,
    //     top: window.pageYOffset + coordDown.top,
    //     behavior: 'smooth'//Замедляет скрол
    // })  
    window.scrollTo({//Скрол от нажатого элемента button к элементу .down (для новых браузеров)
        left: window.scrollX + coordDown.left,
        top: window.scrollY + coordDown.top,
        behavior: 'smooth'//Замедляет скрол
    })  
};
const eventHandler = function(event){
    console.log(event.target, 'Элемент удален');
    elem5[1].remove();//Удаление элемента

};
newEl4.addEventListener('click', eventHandler);
newEl4.addEventListener('click', function(event) {
    console.log(event);
    newEl4.removeEventListener('click', eventHandler);//Отписака от newEl4.addEventListener('click', eventHandler);
});
//Всплытие событий:
newEl.addEventListener('click', function(event) {
    console.log(event.target);
    newEl.style.backgroundColor = 'blue';
    event.stopPropagation();//Останавливает всплытие
});
elem5[1].addEventListener('click', function(event) {
    console.log(event.target);
    console.log(event.currentTarget);//Показывает текущий элемент
    elem5[1].style.backgroundColor = 'yellow';
    // event.stopPropagation()//Останавливает всплытие
});
body.addEventListener('click', function(event) {
    console.log(event.target);
    body.style.backgroundColor = 'grey';
    // event.stopPropagation()//Останавливает всплытие
}, true);//Включает захват (по умолчанию - false) и захват происходит несмотря на то, что 
//на дочернем элементе стоит остановка всплытия (event.stopPropagation())

//Событие наведение и уход мыши:
newEl4.addEventListener('mouseover', function(event) {
    newEl3.style.backgroundColor = 'yellow';   
});
newEl4.addEventListener('mouseout', function(event) {
    newEl3.style.backgroundColor = ''; // Возвращаем исходный цвет
});
//Второй вариант (Если навести курсор на родительский элемент, то события mouseover и mouseenter 
//будут срабатывать оба. Однако если навести курсор на дочерний элемент, событие mouseover 
//сработает для обоих элементов (работает всплытие!), а mouseenter - только для дочернего.):
newEl4.addEventListener('mouseenter', function(event) {
    newEl4.style.backgroundColor = 'purple';   
});
newEl4.addEventListener('mouseleave', function(event) {
    newEl4.style.backgroundColor = ''; // Возвращаем исходный цвет
});
//Делегирование событий + перемещение по DOM (поиск элементов):
const spisok = document.querySelector('.spisok');//Работаем с контейнером всех чисел
console.log(spisok.parentElement);//Нахождение ближайшего родителя элемента spisok, 2-ой вариант:
console.log(spisok.parentNode);
console.log(newEl.closest('body'));//Нахождение ближайшего родителя с body
//querySelector ищет вниз по дереву, closest ищет от элемента вверх по дереву:
console.log(newEl.closest('.err'));//Нахождение ближайшего родителя с .err
console.log(elem5[1].querySelector('button'));//Нахождение button(newEl) внутри .err(elem5[1])
console.log(newEl.previousElementSibling);//Находит ближайшего брата до самого элемента (слева или сверху от него)
console.log(newEl.previousSibling);//Находит то, что располагается непосредственно слева от элемента
console.log(newEl2.nextElementSibling);//Находит ближайшего брата после самого элемента (справа или снизу от него)
console.log(newEl2.nextSibling);//Находит то, что располагается непосредственно справа от элемента

let children = spisok.children;//Получаем список (HTMLCollection) дочерних элементов
// console.log([... children])//Так его можно преобразовать в обычный массив
for (let i = 0; i < children.length; i++) {
    let child = children[i];
    child.setAttribute('data-id', i);
    //Можно сделать так (но тогда будет очень много функций и так лучше не делать):
    // child.addEventListener('click', () =>{
    //     console.log(`Удалили элемент ${Number(i)+1}`)
    // })
}//Правильнее делигировать все эти события на удаление в родительский контейнер и одной функцией все делать:
spisok.addEventListener('click', (event) =>{
    const i = event.target.getAttribute('data-id');
    console.log(`Удалили элемент ${Number(i)+1}`);
    // event.target.remove();
});
//Жизненный цикл событий DOM (глобальные события):
window.addEventListener('load', function(e){//Срабатывает после того как все загрузилось
    console.log('Загрузилось все');
    console.log(e);
});
document.addEventListener('DOMContentLoaded', function(e){////Срабатывает после того как
//построилось дерево документа (хотя, например большие картинки могли еще не загрузится)
    console.log('DOM элемент загрузился');
    console.log(e);
});
// window.addEventListener('beforeunload', function(e){//код не дает пользователю покинуть страницу без подтверждения.
//     e.preventDefault();
// });

//Задача: Динамически создать N элементов с текстом и поле для поиска. При вводе в поле, 
//выделять элементы, которые содержат введённый текст
const cont = document.querySelector('.zadacha_dom');
let pole = document.createElement('input');//Создаем поле для ввода текста
pole.setAttribute('type', 'text');
pole.setAttribute('onchange', 'search()');//1-ый (простой вариант) обработки введенных в поле данных
cont.append(pole);
//Создаем N элементов с рандомным текстом:
for(let j = 0; j < 10; j++){
    let el = document.createElement('div');
    // el.innerText = 'loremru20';
    el.innerText = generateRandomText(20);
    cont.append(el);
}// Функция генерации случайного текста на русском языке:
function generateRandomText(length) {
    const characters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let randomText = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }
    return randomText;
  }
  // Добавляем обработчик события нажатия кнопки ввод для поля (2-ой вариант):
// pole.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         search(); // Вызываем функцию обработки значения
//     }
// });
// Функция для обработки введенного в поле значения:
function search() {
    for (let child of cont.children) {
        child.style.backgroundColor = ''
        if(child.innerText.includes(`${pole.value}`)){
            child.style.backgroundColor = 'red'
        } 
    }  
};
//Модульность методом IIFE (инкапсуляции), здесь важна последовательность расположения файлов:
//файл modul (в котором определяется глобал величина DOM - должен лежать выше настоящего файла)
(function(){
    const a = 6;
    console.log(DOM.modul.add(2, 3));
    console.log(DOM.modul.sub(2, a));  
})();

//ES6 модули (import - всегда всплывает наверх, соответственно то, что импортируется - выполняется первым)
console.log(add(0, 2));
console.log(add(3541, 36543));
//console.log(sub(4432, 887))//Если что-то не нужно (например ф-ция sub), то не 
//обязательно это импортировать - ошибки не будет
setInterval(()=> console.log(add(1, 2)), 1000);//Выводит рез ф-ции add с интервалом в 1 сек
// console.log(res)
console.log(10000000);//Выведется после res - будет ждать пока выполнится запрос в импорте (16modulES6.js)
