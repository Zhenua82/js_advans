'use strict';
console.log(0.1+0.2 === 0.3)//false - т.к. js работает с числами в двоичной системе - получается погрешность:
console.log(0.1+0.2)//получится 0.30000000000000004
//Варианты конвертации в числа:
console.log(Number('10'))
console.log(+'10')
console.log(Number.parseInt('10', 10))//Парсим в 10ричной системе
console.log(Number.parseInt('10', 2))//Парсим в 2ичной системе
console.log(parseInt('10', 10))//Парсим в 2ичной системе
console.log(Number.parseInt('10 sec', 10))//Главное чтобы число стояло первым
console.log(Number.parseInt('sec 10', 10))//false - уже ошибка (число должно стоять первым)
console.log(Number.parseInt('10.964564 sec', 10))//Парсит только целые числа
console.log(Number.parseFloat('10.934536456 sec', 10))//Парсит числа с плавающей точкой
//Проверка на числа:
console.log(Number.isNaN(Number.parseInt('10sec')))//false - значит число, true - не число:
console.log(Number.isNaN(Number.parseInt('sec10')))
console.log(Number.isNaN(Number(10 / 0)))//это недостаток метода isNaN - т.к. Infinity им выдается за число (т.к. Infinity != Nan )
console.log(Number.isFinite(10 / 0))//false - значит не число
console.log(Number.isFinite(10.23423453))//true - значит число
console.log(Number.isFinite(Number.parseInt('sec10')))//false - значит не число
console.log(Number.isFinite(Number.parseInt('10.964564 sec', 10)))//true - значит число
//Проверка чисел на целочисленность:
console.log(Number.isInteger(3.243))//false - значит не целое число
console.log(Number.isInteger(3.000))//true - значит целое число
console.log(Number.isInteger(1.))//true - значит целое число
console.log(Number.isInteger(1))//true - значит целое число
//Math - глобальный объект, содержащий статические свойства и методы для математических констант и функций:
console.log(Math.sqrt(36))
console.log(36 ** (1/2))
console.log(Math.cbrt(27))//Кубический корень
console.log(27 ** (1/3))//Кубический корень
console.log(16 ** (1/4))//Корень четвертой степени
console.log(Math.sign(-24))//Дает знак числа
console.log(Math.sign(76))
console.log(Math.abs(-45))//Дает модуль числа
console.log(Math.max(1, -4, 2, 43, 7, 3))
console.log(Math.max(1, true, 2, '43', 7, 3.75823456))//Работает пока может преобразовать в числа
console.log(Math.max(1, true, 2, '43', '7пва', 3.75823456))//Уже не работает - результат NaN
console.log(Math.min(1, 4, 2, 43, 7, -3))
const arr = [1, -7, 58, 84, 3, 58]
console.log(Math.min(...arr))//Нахождение min/max в массиве
console.log(Math.random())//Вывод случайного числа от 0 до 1
console.log(Math.round(56.23))//Обычное округление
console.log(Math.floor(58.99))//округление в меньшую сторону
console.log(Math.ceil(55.34))//округление в большую сторону
console.log(Math.trunc(5.84))//оставляет только целое число
console.log(1.432434.toFixed(1))//округление до числа указанного по счету после запятой
console.log(typeof 1.432434.toFixed(2))//тип - строка
console.log(Number(1.432934.toFixed(3)))//округление до числа указанного по счету после запятой
console.log(typeof Number(1.432934.toFixed(3)))//переводим результат в число
//Оператор остатка от деления:
// Проверка числа на четность 1ый вариант:
let ost = n => n % 2 === 0
let n
// n = prompt("Введите число:");
// n = parseInt(n);
console.log(`Введенное число ${n} - ${ost(n) == true ? 'четное' : (ost(n) == NaN || typeof n === 'undefined') ? 'число не введено' : 'нечетное'}`)
// 2ой вариант:
let nn = 4
if(nn % 2 === 0){
    console.log(`число ${nn} - четное`)
} else{console.log(`число ${nn}: нечетное}`)}
// Разделитель числа:
let g = 45_890_000_000
let sum = g + 2
console.log(sum, g)
//BigInt - большие числа:
console.log(Number.MAX_SAFE_INTEGER)//Самое большое число до которого js работает без ошибок
console.log(Number.MIN_SAFE_INTEGER)//Самое маленькое число до которого js работает без ошибок
console.log(233333333352352345213452345324532453453245234000000n + 1n)//Работа с BigInt
console.log(BigInt('3746278365832560000000000000000000') + 1n)//Работа с BigInt 2ой вариант
console.log(10n == 10)//результат - true
console.log(10n === 10)//результат - false
console.log(typeof 10n)//результат - bigint

// Задача: написать функцию, которая принимает min и max и возвращает случайное целое число 
// между ними, включая их
//Вариант без отрицательных чисел:
function randd (min, max){
    let a = Math.random() * 10
    while (a < min) {
        a = a * 10
    }
    let b = Math.trunc(a)
    if (b > max){
        randd(min, max)
    } else{console.log(b)}
}
randd(40,60)
// Универсальный вариант:
function randdd (min, max){
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
}
randdd(-30, 10)

//Интернализация чисел:
//документация: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
const options1 ={
    style: 'currency',
    currency: 'USD'
}
const options2 ={
    style: 'currency',
    currency: 'USD',
    useGrouping: false//Убирает пробел
}
const options3 ={
    style: 'unit',
    unit: 'celsius',
}
const options4 ={
    style: 'percent',
}
console.log(new Intl.NumberFormat('en-Us', options1).format(23000))
console.log(new Intl.NumberFormat('ru-Ru', options2).format(23000))
console.log(new Intl.NumberFormat('ar-Sy', options3).format(23.5))
console.log(new Intl.NumberFormat('zh-CN', options4).format(0.5))
// Задача:
/*
	Напишите функцию, которая принимает 3 параметра:
	- Сумма
	- Валюта исходная
	- Валюта для конвертации
	И возвращает строку уже сконвертированной суммы с постфиксом
	валюты. Если не смог, то null.
	Для примера 3 валюты.
*/
function convert(summ, start, finish){
    if ((start == 'rub' || start == 'Rub' || start == 'RUB') && (finish == 'usd' || finish == 'USD' || finish == 'Usd')){
        summ = summ / 90
        return(new Intl.NumberFormat('ru-Ru', {style: 'currency', currency: `${finish}`}).format(summ))
    } else if ((start == 'usd' || start == 'USD' || start == 'Usd') && (finish == 'rub' || finish == 'Rub' || finish == 'RUB')){
        summ = summ * 90
        return(new Intl.NumberFormat('ru-Ru', {style: 'currency', currency: `${finish}`}).format(summ))
    } else {return ('null')}
}
console.log(convert(9000, 'rub', 'usd'))
console.log((convert(50, 'usd', 'rub')))
// 2ой вариант:
function conv(sum, start, finish){
    let a = [
        {name: 'USD', ind: 1},
        {name: 'RUB', ind: 1/90},
        {name: 'EUR', ind: 1.1}
    ]
    let start_el = a.find(el => el.name == start)
    if (!start_el){
        return('null')
    } else{
    let finish_el = a.find(el => el.name == finish)
    if (!finish_el){
        return('null')
    } else{
        let res = sum * start_el.ind / finish_el.ind
        return(new Intl.NumberFormat('ru-Ru', {style: 'currency', currency: `${finish}`}).format(res))
    }}   
}
console.log(conv(300, 'USD', 'EUR'))
console.log(conv(300, 'UA', 'EUR'))
console.log(conv(300, 'RUB', 'EUR'))
