'use strict';
//async await:
async function getProducts(){
    // try{
    const productsResp = await fetch('https://dummyjson.com/products/');
    if (!productsResp.ok) {
        throw new Error(productsResp.status);
    }
    const {products} = await productsResp.json();

    const productResp = await fetch('https://dummyjson.com/products/' + products[3].id);
    const product = await productResp.text();
    console.log(product);

    return products;
// } catch(e){console.error(e);}
// finally{console.log('finally')}
} 
async function main() {
    const products = await getProducts();
    console.log(products);
}
try{
    const a = 5
    a = 4
} catch(e){
    console.error(e)
}
main().catch(error => {
    console.error('Error:', error);
});
console.log('end')

// Задача: получить геолокацию через Geolocation.gerCurrentPosition() (WEB API) и по координатам
// определить город, отправив заапрос: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&longitude=00
function success(pos) {
    const crd = pos.coords;
    gett(crd.latitude, crd.longitude)
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error);

async function gett(latitude, longitude) {
    const getcity = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
    const city = await getcity.json();
    console.log(city.locality)
};

//Помимо асинхронных функций еще бывают асинхронные методы и асинхронные стрелочные функции:
class Prodd{
    async getProd(i){
        try{
            const get = await fetch('https://dummyjson.com/products/');
            const {products} = await get.json();
            console.log(products);
            console.log(products[i])
            return products
        } catch(e) {console.error(e)}
        finally{console.log('!!!!!!!')}    
    };
    sale = 50;
};
const prr = new Prodd();
console.log(prr);
prr.getProd(2);

//Асинхронные стрелочные функции:
let pr;
class Prod {
    constructor(i) {
        this.i = i;
        this.product = null;
        // Асинхронная функция, которая получает данные и присваивает их в product
        this.getProd = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/');
                const { products } = await response.json();
                this.product = products[this.i]; // Присваиваем результат в product
                return this.product;
            } catch (error) {
                console.error(error);
            }
        };
        // Вызываем функцию getProd при создании экземпляра класса
        this.getProd();
    }
};
(async () => {
    pr = new Prod(6);
    await pr.getProd(); // Ждем завершения асинхронной операции
    console.log(pr.product); // Выведет результат
})();
console.log(pr);
console.log(pr.product);
(async () => {
    await pr.getProd(); // Ждем завершения асинхронной операции
    console.log(pr.product); // Выведет результат
})();
console.log(pr.product);
