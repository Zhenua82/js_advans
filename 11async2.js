'use strict';
//Последовательность в асинхронности:
// Непоследоваьельно:
console.log(1);//1
const asyn = async () => {
    const response = await fetch('https://dummyjson.com/products/');
    console.log(await response.json())//3
};
asyn();
console.log(2);//2
// Последовательно: 1-ый вариант:
console.log(11);//1
const asynn = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products/');
        const data = await response.json();
        return data
    } catch (e){
        console.error(e);//Выгружаем ошибку
        throw e//Прокидываем ошибку дальше по коду
    }   
};
asynn().then(data => {
    console.log(data);//2
    console.log(22)//3
}).catch(e => console.error(e));//Ловим и еще раз выгружаем ошибку
// 2-ой вариант:
(async () => {
    console.log(111);//1
    const respon = await fetch('https://dummyjson.com/products/');
    console.log(await respon.json())//2
    const response = await asynn();
    console.log(response.products);//3
    console.log(222)//4
})()

// Последовательное выполнение запросов (медленно):
// async function allProductss(i){
//     const resp = await fetch(`https://dummyjson.com/products/${i}`)
//     const products = await resp.json()
//     console.log(products)
// }

// async function mainn(){
//     for (let i = 1; i <= 30; i += 1){
//         await allProductss(i)
//     }
//     // const resp = await fetch(`https://dummyjson.com/products/`);
//     // const {products} = await resp.json();
//     // await products.forEach(product => allProductss(product.id))
// }
// mainn()

// Параллельное выполнение запросов (быстро):
// async function allProducts(i){
//     const resp = await fetch(`https://dummyjson.com/products/${i}`)
//     const products = await resp.json()
//     // console.log(products)
//     return products
// }
// async function main(){
//     // let idd = []
//     // for (let i = 1; i <= 30; i += 1){
//     //     idd.push(allProducts(i))
//     // }
//     // const ress = await Promise.all(idd)
//     // console.log(ress)
//     const resp = await fetch(`https://dummyjson.com/products/`);
//     const {products} = await resp.json();
//     const res = await Promise.all(products.map(product => allProducts(product.id)))
//     console.log(res)
// }
// main()
// Параллельное выполнение запросов c различными статическими методами Promise (.all, .allSettled, .race):
async function allProducts(){
    const resp = await fetch(`https://dummyjson.com/products/`)
    const {products} = await resp.json()
    console.log(products)
    return products
}
async function produc(i){
    const resp = await fetch(`https://dummyjson.com/products/${i}`);
    const prod = await resp.json()
    return prod
}
async function producErr(i){
    const resp = await fetch(`https://dummyjsons.com/products/${i}`);
    const prod = await resp.json()
    return prod
}
async function main(){
    const resp = await allProducts()
    const res1 = await Promise.all(resp.map(product => produc(product.id)))
    console.log(res1)
    const res2 = await Promise.all([//Если ошибка у одного - то все падает
        produc(1),
        // producErr(2),
        produc(3)
    ])
    console.log(res2)
    const res3 = await Promise.allSettled([//Позволяет обрабатывать с ошибкой, но появляется доп вложенность в ответе
        produc(1),
        producErr(2),
        produc(3)
    ])
    console.log(res3)
    const res4 = await Promise.race([//Получает самый быстрый ответ из всех запросов и его выводит
        produc(1),
        produc(2)
    ])
    console.log(res4)
    const res5 = await Promise.race(resp.map(product => produc(product.id)))
    console.log(res5)
}
main()