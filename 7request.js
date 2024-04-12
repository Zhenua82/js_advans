'use strict';

const req2 = new XMLHttpRequest();
req2.open('GET', 'https://dummyjson.com/products/');
req2.send();

req2.addEventListener('load', function(){
    // console.log(this.responseText)
    console.log(JSON.parse(this.responseText))
})

const req1 = new XMLHttpRequest();
req1.open('GET', 'https://dummyjson.com/products/1');
req1.send();

req1.addEventListener('load', function(){
    // console.log(this.responseText)
    console.log(JSON.parse(this.responseText))
})
console.log('end')

function req(id){
    const req = new XMLHttpRequest();
    req.open('GET', 'https://dummyjson.com/products/' + id);
    req.send();

    req.addEventListener('load', function(){
        // console.log(this.responseText)
        console.log(JSON.parse(this.responseText))
    })
}
req(5)
req('')
// Задача: получить среднюю цену 30 товаров из API https://dummyjson.com/products
const reqz = new XMLHttpRequest();
reqz.open('GET', 'https://dummyjson.com/products/');
reqz.send();
// 1-ый вариант:
reqz.addEventListener('load', function(){
    let data = JSON.parse(this.responseText)
    let summ = 0
    for (let i of data.products){
        summ += i.price    
    }
    console.log(summ/data.products.length)
});
// 2-ой вариант:
reqz.addEventListener('load', function(){
    let data = JSON.parse(this.responseText)
    const summ = (data.products).reduce((prev, elem) => {
        return prev += elem.price;
    },0)
    console.log(summ/data.products.length);
});
// 3-ий вариант (с помощью деструктуризации):
reqz.addEventListener('load', function(){
    let {products} = JSON.parse(this.responseText)
    const summ = products.reduce((prev, elem) => {
        return prev += elem.price;
    },0)
    console.log(summ/products.length);
});

//Проблемы callback (последовательность запросов - один пишется в конце другого, все уезжает направо
// и происходит путаница):
const req_probl = new XMLHttpRequest();
req_probl.open('GET', 'https://dummyjson.com/products/');
req_probl.send();

req_probl.addEventListener('load', function(){
    let { products } = JSON.parse(this.responseText)
    console.log(products);

    const req_next = new XMLHttpRequest();
    req_next.open('GET', 'https://dummyjson.com/products/');
    req_next.send();

    req_next.addEventListener('load', function(){
        let productAll = JSON.parse(this.responseText)
        console.log(productAll);

        const req_next2 = new XMLHttpRequest();
        req_next2.open('GET', 'https://dummyjson.com/products/' + products[5].id);
        req_next2.send();

        req_next2.addEventListener('load', function(){
            let product6 = JSON.parse(this.responseText)
            console.log(product6);
        });   
    }); 
});

//Promise (контейнер - обёртка) и метод fetch (возвращает promise):
let res = fetch('https://dummyjson.com/products/1')
console.log(res)//Получаем promise "fulfilled" - успешный
//Вывод данных:
fetch('https://dummyjson.com/products/1')
    .then((resp) => {
    console.log(resp)//Получаем Responce(ответ)
    // return resp.json()//Переводим и возвращаем данные в формате json
    return resp.text()//Переводим и возвращаем данные в формате текст
    })
    .then((date) => console.log(date))//Выводим данные
//Короткая запись:
fetch('https://dummyjson.com/products/4')
    .then(resp => resp.json())
    .then(date => console.log(date))
    
//Цепочка (chein)  promise:
fetch('https://dummyjson.com/products/')
    .then(resp => resp.json())
    .then(({products}) => {
        console.log(products)
        // return fetch('https://dummyjson.com/products/' + products[3].id)
        return fetch('https://dummyjson.com/products/' + 4)
    })
    .then(resp => resp.text())
    .then(date => console.log(date))