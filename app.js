'use strict';

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

