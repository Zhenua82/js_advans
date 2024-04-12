'use strict';
//обработка ошибок(reject) - error, .catch и .finally:
fetch('https://strizhki-anapa.ru/')
    .then(
        resp => resp.json(),
        // error => console.log(error)//Ловит ошибку локально (далее выполнение кода продолжается)
    )
    .then(({products}) => {
        console.log(products)
        return fetch('https://dummyjson.com/products/')
    })
    .then(
        resp => resp.json(),
        // error => console.log(error)//Ловит ошибку локально (далее выполнение кода продолжается)
    )
    .then(date => console.log(date))
    .catch(error => console.log(error))//Ловит ошибку в цепочке и сразу все останавливает (глобальная обработка ошибки)
    .finally(() => console.log('OK'))//.finally - всегда выполняет действия независимо от результата promise

// Задача: Сделать запрос на https://dummyjson.com/products/categories, получить список категорий и 
// отобразить <select></select> выбора категорий.
fetch('https://dummyjson.com/products/categories/')
    .then(resp => resp.json())
    .then(data => data)
    .then(list => {
        const element = document.createElement('select');
        document.querySelector('body').appendChild(element);
        let spisok = '';
        list.forEach((el, i) => {
            spisok += `<option value="${i + 1}">${el}</option>`
        });
        element.innerHTML = spisok
    })
    .catch(error => console.log(error)) 
// 2-ой вариант:
function getData(){
    fetch('https://dummyjson.com/products/categories/')
    .then(resp => resp.json())
    .then(data => makeSelect(data))
    .catch(error => console.error(`Ошибка: ${error}`))//Вариант вывода ошибки
}
function makeSelect(array){
    const element2 = `<select>${array.map(el => `<option value="${el}">${el}</option>`).join('')}</select>`;
    document.querySelector('.zadacha_var2').innerHTML = element2;   
}
getData()
//Ручная обработка ошибок:
fetch('https://dummyjson.com/products/')
    .then(
        resp => {
            if(!resp.ok){
                throw new Error(`Ошибка1: ${resp.status}`)
            }
            return resp.json()
        }   
    )
    .then(({products}) => {
        console.log(products)
        return fetch('https://dummyjson.com/products/' + products[4].id)
    })
    .then(
        resp => {
            if(!resp.ok){
                throw new Error(`Ошибка2: ${resp.status}`)
            }
            return resp.json()
        }   
    )
    .then(date => console.log(date))
    .catch(error => document.querySelector('.err').innerHTML = error)

// Задача: сделать функцию, которая принимает строку и текст ошибки и возвращает уже Promise с
// JSON из тела запроса
function fetchJSON(url, errorMessage) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(errorMessage + `: ${resp.status}`);
                }
                return resp.json();
            })
            .then(json => resolve(json))
            .catch(error => reject(error));
    });
}
fetchJSON('https://dummyjson.com/products/', 'Ошибка1')
    .then(({products}) => {
        console.log(products)
        return fetchJSON('https://dummyjson.com/products/' + products[4].id, 'Ошибка2')
    })
    .then(date => console.log(date))
    .catch(error => document.querySelector('.err').innerHTML = error)
//2-ой вариант:
function getJSON(url, errorMessage, method = 'GET') {//method = 'GET' указывать не обязательно (он по умолчанию)
    return fetch(url, {method})//но можно указать 'POST' и т.д.
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(errorMessage + `: ${resp.status}`);
                }
                return resp.json();
            })
}
getJSON('https://dummyjson.com/products/', 'Ошибка1')
    .then(({products}) => {
        console.log(products)
        return getJSON('https://dummyjson.com/products/' + products[4].id, 'Ошибка2')
    })
    .then(date => console.log(date))
    .catch(error => document.querySelector('.err').innerHTML = error)