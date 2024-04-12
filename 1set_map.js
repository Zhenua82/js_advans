'use strict';
//Set - множество:
let a = [1,2,3,4,5,2,4,6]
let b = new Set(a)//Создание множества из массива a
console.log(b)// остались только уникальные значения
b.delete(5) // удаление из множества элемента со значением 5
b.add('Hi')// добавление в множество элемента 'Hi'
console.log(b)
console.log(b.size)// Получение размера(длины) множества (аналог length для массивов и строк)
console.log(b.has(0))//Проверка наличия элементов в множестве (аналог includes для массивов и строк):
console.log(b.has(1))
let elementsToRemove = [2, 4, 'Hi']; //удаление нескольких элементов из множества:
elementsToRemove.forEach(element => {
    b.delete(element);
});
console.log(b)
let c = [...b]// создание массива c из множества b
console.log(c)
console.log(b)
b.forEach(elem => console.log(elem))// Итерация во множестве, но методы map, reduce, filter, find, findIndex
// some, flat, sort и др. (как в массивах - для множеств не работают)
console.log(b)
for (const [i, el] of b.entries()){// i-индекс, как в массивах здесь не работает
    console.log(`Индекс ${i + 1}: ${el} (количество очков)`);
}
for (const [el] of b.entries()){// поэтому лучше использовать только элементы:
    console.log(`${el} (количество очков)`);
}
b.clear()// Очистка множества, теперь оно пустое
console.log(b)

//WeakSet — это набор значений, поддерживающих сборку мусора, включая объекты и 
//незарегистрированные символы (хотя при повторной перезагрузке браузера - снова восстанавливаются?): 
let y1 = {a: 3}
let y2 = {b: 3}
let x = new WeakSet()
x.add(y1);
x.add(y2);
console.log(x)
y1 = null
console.log(y2)
setTimeout(() => {
    console.log(x)
}, 1000)

//Map - коллекция ключ/значение (структура данных - объект):
let n = new Map()//Создание Map
n.set('London', 5)// Добавление в Map
.set('Moscow', 2)
console.log(n)
n.set('Paris', 7)
console.log(n)
console.log(n.has('Rubcovsk'))//Проверка наличия ключа в Map
console.log(n.has('Moscow'))//Проверка наличия ключа в Map
n.delete('London')// Удаление элемента в Map по ключу
console.log(n)
n.set([1, 2, 2], 'Igorj')// Ключом может быть любой вид данных, но получить по такому ключу данные можно не всегда
//- чтобы это сделать: нужно сперва сложный ключ записать в переменную, а потом ее использовать в виде ключа:
const keyy = {a: 2, b: 4}
n.set(keyy, true)
console.log(n.get(keyy))//Получение значений из Map по ключу
console.log(n.get([1, 2, 2]))// Т.к. здесь ключ сложный - результат значения будет undefined
console.log(n)
console.log(n.size)// Посмотреть размер содержимого Map(сколько элементов ключ\значение)
n.clear()//Очистка Map
console.log(n)
// Виды создания Map:
//1. Метод вложенного массива:
let nn = new Map([ 
    ['Ivan', 43],
    ['Egor', 27]
])
console.log(nn)
//2. Из объекта:
const chel = {
    name: 'Ura',
    suname: 'Ivanov',
    age: 32
}
const chell = {
    name: 'Ura',
    suname: 'Ivanov',
    age: 32,
    fullName: function(){
        return this.name + ' ' + this.suname
    },
    pens() {
        this.age >= 65? console.log('pens') : console.log('no pens')
    }
};
n = new Map(Object.entries(chel)) 
console.log(n)
let nnn = new Map(Object.entries(chell)) 
console.log(nnn)
console.log(nnn.get('age'))
console.log(nnn.get('pens'))
// Итерация по Map:
for (let elem of n){//Итерация по элементам
    console.log(elem)
}
for (let [keys, value] of nnn){//Итерация по ключам и значениям
    console.log(keys)
    console.log(value)
}
n.forEach((value, key) => {
    console.log(value, key);
});
console.log(n.keys())//Итерация по ключам
console.log(n.values())//Итерация по значениям
// Перевод Map в список (массив):
console.log([...n])//Перевод всего Map
console.log([...n.keys()])//Перевод ключей
console.log([...nnn.values()])//Перевод значений
//Перевод Map в строку:
console.log([...n].join(' '))
//Преобразование объекта в массив:
const cchel = {
    name: 'Ura',
    suname: 'Ivanov',
    age: 32,
    fullName: function(){
        return this.name + ' ' + this.suname
    },
    pens() {
        this.age >= 65? console.log('pens') : console.log('no pens')
    }
};
let mmm = new Map(Object.entries(cchel))
let mm = [...mmm].flat()
console.log(mm)
// Задача:
// поменять местами значение keys и value в Map z:
let z = new Map([
    ['name', 'Ura'],
    ['suname', 'Ivanov'],
    ['age', 32]

])
//1 ый вариант:
let neww = new Map()
for (let [keys, value] of z){//Итерация по ключам и значениям
    neww.set(value, keys)
}
console.log(neww)
neww.clear()
//2 ой вариант:
z.forEach((value, key) => {
    neww.set(value, key);
});
console.log(neww)
neww.clear()
//3 ий вариант:
neww = new Map(Array.from(z, ([key, value]) => [value, key]));
console.log(neww)
//4 ий вариант:
z = new Map([...z].map(el => el.reverse()))
console.log(z)
//WeakMap - это коллекция пар ключ-значение. В качестве ключей могут быть использованы только
//объекты и незарегистрированные символы (должны поддерживать сборку мусора):
let p = new WeakMap()
let kkey1 = {a: 3}
let kkey2 = {b: 3}
p.set(kkey1, 'one')
p.set(kkey2, 22)
console.log(p)
kkey2 = null//Когда ключ обнулился - в WeakMap автоматически удаляется элемент, содержащий 
//этот ключ
console.log(p)