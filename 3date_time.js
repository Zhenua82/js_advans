console.log(performance.now())//показывает какое время в милисек прошло с момента запуска программы
'use strict';
console.log(performance.now())//показывает какое время в милисек прошло с момента запуска программы
console.log(new Date())//Настоящее время
console.log(new Date(0))//Стартовое время 1970г
console.log(Date.now())//Настоящее время в пройденных милисекундах от стартового времени
console.log(new Date(0 + Date.now()))//Настоящее время
console.log(new Date(Date.now()))//Настоящее время
console.log(new Date('30 Oct 1982'))//Варианты вввода строкой:
console.log(new Date('10-30-1982'))
console.log(new Date('10/30/1982'))
console.log(new Date('1982-10-30'))
console.log(new Date('10 30 1982'))
console.log(new Date('10 30 1982 12:40:38'))
//Варианты ввода цифрами:
console.log(new Date(2024, 3, 25))//Здесь месяц начинается с 0, поэтому 3 - это апрель
console.log(new Date(2024, 3, 25, 17, 40, 30))//добавляем время
console.log(new Date(2024, 3, 25, 17 + 50))//добавляем 50 часов
console.log(new Date(5 * 24 * 60 * 60 * 1000))//добавили 5 суток к стартовому времени (в милисек)
//Варианты получения элементов даты или времени:
console.log(new Date().getDay())//Дает цифру, указывающую на день нетели 1 - это понетдельник и т.д.
console.log(new Date().getDate())
console.log(new Date().getFullYear())
console.log(new Date().getUTCMilliseconds())
console.log(new Date().getTime())//Дает время в милисек от стартового времени
//Варианты изменения даты и времени:
console.log(new Date().setHours(5))//Изменяет милисек прошедшие от стартого времени
let now_time = new Date()
let tumorow = new Date('26 Mar 2024')
console.log(new Date(now_time.setHours(5)))//Изменяет часы на заданную цифру в обычном вормате времени
console.log(new Date(tumorow.setHours(5)))
//Операции с датами:
console.log(new Date() - new Date(2024, 2, 26, 17))//Дает результат в милисек
console.log((new Date() - new Date(2024, 2, 26, 17))/(1000 * 60 * 60))//Дает результат в часах
//Сравнение дат:
const first_date = new Date(2023, 4, 20)
const second_date = new Date(2023, 4, 20)
console.log(first_date == second_date)//будет false т.к. здесь сравниваются ссылки, правильно делать так:
console.log(first_date.getTime() == second_date.getTime())
console.log(Number(first_date) == Number(second_date))
console.log(+first_date === +second_date)
//Интернационализация даты и время:
let date = new Date()
console.log(new Intl.DateTimeFormat('en-Uk').format(date))
console.log(new Intl.DateTimeFormat(navigator.language).format(date))//navigator.language - использует язык браузера
const option1 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short',
    year: '2-digit',
    day: 'numeric'
}
console.log(new Intl.DateTimeFormat(navigator.language, option1).format(date))
console.log(new Intl.DateTimeFormat('en-US', option1).format(date))
//Задача:
// Создать функцию, которая принимает пользователя и проверяет, есть ли у него сегодня день рождения
// или нет
const user = {
    name: 'Vasja',
    birthday: '3/25/2002'
}
function proverka(chel){
    let a = new Date(chel.birthday)
    let day = a.getDate()
    let month = a.getMonth()
    if (day == new Date().getDate() && month == new Date().getMonth()){
        return true
    }
    return false
}
console.log(proverka(user));
//Таймеры:
const timer = setTimeout(() => {
    console.log('Hello!')
}, 1000);//Здесь точки с запятыми обязательно - иначе могут быть ошибки!
console.log(timer);//выводит какой по счету таймер (его идентификатор)
let as = 3457;
(() => console.log('Start init'))();//Инкапсулированная функция, такая же и setTimeout
const timer2 = setTimeout((message1, message2) => {
    console.log(message1, message2)
}, 5000, as, user);
console.log(timer2);//выводит какой по счету таймер (его идентификатор)
clearTimeout(1);//можно очистить таймер по идентификатору (его номеру по счету)
clearTimeout(timer2)//можно очистить таймер по названию переменной которой он присвоен
let mass = [true, as, user, 37465, '564782379'];
let zasechka1 = performance.now();
setTimeout((message1, message2) => {
    console.log(message1, message2);
    console.log(performance.now() - zasechka1)//показывает реальную продолжительность паузы в милисек
}, 2000, ...mass);//Можно передовать массив, тогда будет работать с его элементами начиная с первых
clearTimeout(3);
//Работа с интервалами:
let zasechka2 = performance.now();
setInterval(() => {
    console.log(new Date())
    console.log(zasechka2)
    console.log(performance.now() - zasechka2)
},5000);
let interval = setInterval(() => {
    console.log(new Intl.DateTimeFormat(navigator.language, {hour: 'numeric', minute: 'numeric', second: 'numeric'}).format(new Date()))
}, 5000);
console.log(interval);//Выводит индекс индервала (какой по счету из setTimeout и setInterval)
setTimeout(() => {clearInterval(4)}, 100);//Очищаем работу интервала с 4 индексом 
setTimeout(() => {clearInterval(interval)}, 250);//Очищаем работу интервала - interval 
//Задача: 
/* 
	Таймер пиццы
	Сделать таймер пиццы (функцию, принимающую время),
	который будет выводить в консоль секунды,
	оставшиеся до готовности пиццы и сообщение по готовности.
	00:04
	00:03
	00:01
	00:00
	🍕!!!
*/
function timer_pica(sec){
    let zasechka = new Date()
    let interval = setInterval(() => {
        let timer = new Intl.DateTimeFormat(navigator.language, {second: 'numeric'}).format(new Date() - zasechka)
        if(timer <= sec){
            let a = sec - timer
            console.log(new Intl.DateTimeFormat(navigator.language, {minute: 'numeric', second: 'numeric'}).format(new Date(`10 30 1982 12:00:${a}`)))
        } else if (timer > sec){
            console.log("🍕!!!");   
        }
    }, 1000);
    setTimeout(() => {clearInterval(interval)}, (sec + 1) * 1000)
}
// timer_pica(3)
//2-ой вариант:
function pizzaTimer(seconds) {
    let totalSeconds = seconds;
    const timer = setInterval(function() {
        totalSeconds--;
        if (totalSeconds >= 0) {
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;
            
            const formattedMins = mins < 10 ? `0${mins}` : `${mins}`;
            const formattedSecs = secs < 10 ? `0${secs}` : `${secs}`;
            
            const formattedTime = `${formattedMins}:${formattedSecs}`;
            
            console.log(formattedTime);
        } else {
            clearInterval(timer);
            console.log("🍕!!!");
        }
    }, 1000);
}
// pizzaTimer(70);
//3-ий вариант (гибрид):
function timer_picaa(sec){
    let zasechka = new Date()
    let interval = setInterval(() => {
        let timer = new Intl.DateTimeFormat(navigator.language, {second: 'numeric'}).format(new Date() - zasechka)
        let totalSeconds = sec - timer
        if (totalSeconds >= 0) {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        console.log(new Intl.DateTimeFormat(navigator.language, {minute: 'numeric', second: 'numeric'}).format(new Date(`10 30 1982 12:${mins}:${secs}`)))
        }
        else {
            clearInterval(interval);
            console.log("🍕!!!");
        }
    }, 1000);
}
// timer_picaa(300)
// 4-ый вариант:
function timer_pica4(mssec){
    let zasechka = new Date().getTime() + mssec;
    let interval = setInterval(() => {
        let timer = new Intl.DateTimeFormat(navigator.language, {minute: 'numeric', second: 'numeric'}).format(zasechka + 200 - new Date());
        console.log(timer)
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log("🍕!!!")}, mssec)
}
// timer_pica4(5000)
