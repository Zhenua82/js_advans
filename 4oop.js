'use strict';
const Klass_user = function(mail, password){//constructor
    this.mail = mail
    this.password = password
}
const user1 = new Klass_user('ggg@mail.ru', 'aaaa');
const user2 = new Klass_user('kkk@mail.ru', 'rrrr');
console.log(user1, user2.password)
console.log(user2 instanceof Klass_user)//Получаем true - это проверка того, что объект user2 принадлежит классу Klass_user
const Book = function(name, autor){
    this.name = name
    this.autor = autor
    this.isread = false
    this.read = () => this.isread = true
}
const book1 = new Book('oxota', 'Petrov')
console.log(book1)
console.log(book1.isread)
console.log(book1.read(), book1.isread)
// 2-ой вариант (Prototype):
const Books = function(name, autor){
    this.name = name
    this.autor = autor
    this.isread = false
}
Books.prototype.read = function(){
    this.isread = true
}
Books.prototype.color = 'red'
const book2 = new Books('oxota2', 'Petrov2')
book2.read()
console.log(book2)
console.log(book2.color)
console.log(book2.__proto__)//Выводим в консоль все имеющиеся у объекта book2 прототипы (prototype)
console.log(Books.prototype.isPrototypeOf(book2))//Проверяем является ли Books.prototype прототипом для book2 
console.log(book2.hasOwnProperty('color'))//Проверяем имеется ли свойство 'color' у объекта book2 - ответ false
console.log(book2.hasOwnProperty('isread'))//Проверяем имеется ли свойство 'isread' у объекта book2 - ответ true

// Задача: Реализовать на функциях и прототипах корзину товаров с методами:
// - Добавить товар
// - Увеличить число товаров
// - Уменьшить число товаров (удалить если их 0)
const product = {id: 1, name: 'Bread', count: 1}
const product2 = {id: 2, name: 'Oil', count: 1}

const Corzina = function(){
    this.products =[]
}
Corzina.prototype.add_product = function(product){
    let eleme = this.products.find((el) => el.id == product.id)
    if (eleme !== undefined) {
        eleme.count += 1
    } else {
        this.products.push(product)}
}
Corzina.prototype.del_product = function(product){
    let eleme = this.products.find((el) => el.id == product.id)
    if (eleme !== undefined && eleme.count > 1) {
        eleme.count -= 1
    } else if (eleme !== undefined && eleme.count == 1){
        let ind = this.products.findIndex(el => el.id == product.id);
        this.products.splice(ind, 1)}
        else{console.log(`Продукта: ${product.name} в корзине нет!`)}
}
const corz = new Corzina()
corz.add_product(product)
corz.add_product(product)
corz.add_product(product)
corz.add_product(product2)
console.log(corz.products)
corz.del_product(product2)
corz.del_product(product2)
console.log(corz.products)
corz.del_product(product)
console.log(corz.products)
// Классы:
class Bookk {
    isread = false;
    constructor(name, autor){
        this.name = name
        this.autor = autor
    };
    read(){
        this.isread = true
    };
    a = 8
}
const newBook = new Bookk('Ivan', 'Baran')
newBook.read()
console.log(newBook)
console.log(newBook.a)
//Гетеры и сетеры:
class Task {
    // constructor(surname){
    //     this.surname = surname
    // }
    title = 'ping'
    time = new Date('10/30/1982')
    timeout(){//Гетер - нужен для проверки данных и их получения (например, полное ФИО пользователя)
        return this.time > new Date()
    }
    timein (newTime){//Сетер - нужен для валидации при установки данных
        if (new Date(newTime) >= this.time){
            return
        }
        this.time = new Date(newTime)
    }
}
const task1 = new Task
console.log(task1)
console.log(task1.timeout())
task1.timein('9/30/1982')
console.log(task1)
class Taskk {
    title = 'ping'
    time = new Date('10/30/1982')
    get timeout(){//Гетер - нужен для проверки данных и их получения (например, полное ФИО пользователя)
        return this.time > new Date()
    }
    set timein (newTime){//Сетер - нужен для валидации при установки данных
        if (new Date(newTime) >= this.time){
            return
        }
        this.time = new Date(newTime)
    }
}
const task2 = new Taskk
console.log(task2)
console.log(task2.timeout)
task2.timein = '09/30/1982'
console.log(task2)
//Статика:
class Usser {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age    
    }
    vid = 'chel'
    proffes = 'slesarj'
    static age = 25
    static hello(){
        console.log('Hello!')
    }
    static{
        let height = 180
        this.heightt = 60
        this.vid = height + 70
    }
}
Usser.hello()//Статика позволяет напрямую через класс обращаться к его свойствам и методам
const usser1 = new Usser('Petja', 'Li', 47)
console.log(usser1)
const usser3 = new Usser('Petja', 'Li')
console.log(usser3)
console.log(usser3.age)//Здесь undefined - т.к. возраст был не задан для usser3
console.log(Usser.age)
console.log(Usser.height)//Здесь undefined - т.к. переменная имеют локальную область видимости внутри статического блока инициализации
console.log(Usser.heightt)
console.log(Usser.vid)
//Приватные методы и свойства:
class Car {
    #vim = 789
    color = 'blue'
    vimvew(){
        console.log(this.#vim)
    }
    static marka = 'Volga'
    static #hello(){
        console.log('Hello')
    }
    static helloworld(){
        this.#hello()
    }
}
console.log(Car.hello)//undefined - т.к. hello - приватный метод
Car.helloworld()//выполняет этот приватный метод
const car1 = new Car
console.log(car1)
console.log(car1.color)
console.log(car1.vim)//undefined - т.к. vim - приватное свойство
car1.vimvew()//показывает это приватное свойство
// Задача: Реализовать класс пользователя, со своими
// - логин
// - пароль
// Причем пароль при устаноке должен переворачиваться и в таком виде храниться.
// Пароль и логин после создания изменить нельзя. Так же у класса добавить методы
// - Смены пароля (передаем старый и новый пароль)
// - Сверки пароля
class User {
    #login;
    #paroll;
    constructor(login, paroll){
        this.#login = login
        this.#paroll = paroll.split('').reverse().join('')
    }
    get login() {
        return this.#login;
    }
    get paroll() {
        return this.#paroll.split('').reverse().join('');
    }
    parrollproverka(proverparoll) {
        return this.paroll === proverparoll
    }
    smenaparoll(oldparoll, newparoll){
        if (this.parrollproverka(oldparoll) === true){
            this.#paroll = newparoll.split('').reverse().join('')
            console.log('Пароль сменен!')
        } else {console.log('Вы ввели не верный пароль')}
    }
}
const user10 = new User('user', 'asdf')
console.log(user10)
// user10.login = 'hhhhh'
console.log(user10)
console.log(user10.login)
console.log(user10.paroll)
console.log(user10.parrollproverka('asdf'))
user10.smenaparoll('asdf', '9876')
console.log(user10)

const object = {
    init(email, paroll){
        this.email = email
        this.paroll = paroll
    },
    a: 5,
    b: 7,
}
let object2 = Object.create(object)
console.log(object2)
console.log(object2.a)
object.init('mail@com', '345')
console.log(object)
console.log(object2)
object2.init('mail@ru', '903')
console.log(object2)
console.log(object2.__proto__.email)//выводим email который в прототипе у object2
console.log(Object.getPrototypeOf(object2).paroll)//выводим paroll который в прототипе у object2
if ('email' in Object.getPrototypeOf(object2) && 'paroll' in Object.getPrototypeOf(object2)) {
    console.log(Object.getPrototypeOf(object2).email, Object.getPrototypeOf(object2).paroll);
}//Сперва проверяет имеются ли  email и paroll в прототипе object2 и если да - то выводит их

const object3 = Object.create(object2)
console.log(object3)//У этого объекта будет уже 2 вложенных прототипа
console.log(object3.b)
console.log(Object.getPrototypeOf(object3).email, Object.getPrototypeOf(object3).paroll)