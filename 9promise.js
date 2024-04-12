
'use strict';

//Последовательность обработки кода (вывода): 1,5,3,4,2 (сперва выполняется синхронный код и 
//только после него - асинхронный с привилегией promise - у Microtask Queue привелегия над 
//Callback Queue): 
console.log(1)
setTimeout(()=>console.log(2), 0)
Promise.resolve(3).then(res => {
    console.log(res)
    // for (let i = 0; i < 8000000000; i++){}//Задержка (около 6 сек)
})
const a = new Promise((resolve, reject)=> {
    if (2 < 1) {
        // reject ('Error')
        reject (new Error('Ошибка'))//Предпочтительно создавать такую ошибку
    }
    resolve (4)
})
a.then((data) => console.log(data)).catch(error => console.log(error))
// a.then((data) => console.log(data)).catch(err => console.error(err))//Второй вариант вывода ошибки в консоль
console.log(5)

function timeout(sec){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(`Прошло - ${sec} секунд`)
        }, sec*1000)
    })
}
timeout(6).then((date) => console.log(date))
timeout(1)
    .then(() => {
        console.log(1)
        return timeout(1)
    })
    .then(() => {
        console.log(1)
        return timeout(1)
    })

//Последовательность обработки кода внутри promise:
Promise.resolve('test 1').then(res => console.log(res))
const prom = new Promise((resolve)=> {
    console.log('test 2')//Отрабатывает как синхронный код - первым
    resolve ('test 3')
})
prom.then(data => console.log(data))
Promise.resolve('test 1').then(res => console.log(res))

// Задача: сделать функцию myFetch, которая принимает url и выполняет внутри XMLHttpRequest
function myFetch(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();

        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 300) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(new Error('Ошибка адреса'));
            }
        });

        req.addEventListener('error', function () {
            reject(new Error('Ошибка сети'));
        });
    });
}
myFetch('https://dummyjson.com/products/')
    .then(data => console.log(data))
    .catch(error => console.log(error));
