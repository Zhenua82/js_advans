'use strict';
//Наследование:
const Book = function(title, author, year){
    this.title = title
    this.author = author
    this.year = year
}
Book.prototype.info = function(){
    console.log(`${this.title} - ${this.author}`)
}
console.log(Book)
const newBook = new Book('Название', 'Петров', 1985)
console.log(newBook)
newBook.info()

const AudioBook = function(title, author, year, time){
    Book.call(this, title, author, year)//Наследуем свойства title, author, year от Book
    this.time = time
}
AudioBook.prototype = Object.create(Book.prototype)//Наследуем прототип от Book
// audioBook.prototype = Book.prototype//2-ой вариант присвоения прототипа от Book, но здесь конструктор будет не верным (от Book)
AudioBook.prototype.constructor = AudioBook;//Для полного наледования - в прототипе audioBook указываем его конструктор
AudioBook.prototype.log = function(){
    console.log(`${this.year}г - год издания книги` )
};
const newAudio = new AudioBook('Hi', 'Ivan', 1983, 20 * 60)
console.log(newAudio)
newAudio.log()
newAudio.info()
console.log(newAudio instanceof AudioBook)//true - проверка на наследование от AudioBook
console.log(newAudio instanceof Book)//true - проверка на наследование от Book
//Наследование в ES6:
class Bookk {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    info(a){
        console.log(`${this.title} - ${this.author} + ${a}`)
    }
}
class AudioBookk extends Bookk{//Наследование (extends)
    constructor(title, author, year, time){
        super(title, author, year);//Вызываем конструктор из наследуемого класса (Bookk)
        this.time = time
    }
    log(){
        console.log(`${this.time}с - длительность книги`)
    }
    info(a){
        console.log(`${this.title} - ${this.author} + переделка ${a}`)//Переопределение метода в наследуемом классе
    }
}
const newwbook = new AudioBookk('Klass ES6', 'Artamon', 2023, 20*60)
const albom = new Bookk('Albom', 'Djon', 2024)
console.log(albom)
albom.info(667)
console.log(newwbook)
newwbook.info(786)
newwbook.log()
// Задача: Сделать класс врага со здоровьем и методом получения урона
// Сделать класс меча, которые имеет силу и методу нанесения урона.
// Сделать класс орка, который в 50% случаев не получает урон.
class Vrag {
    constructor(heals){
        this.heals = heals
        this.pervhels = heals
    };
    uron(a){
        this.heals = this.heals - this.pervhels / 100 * a
    }
}
class Exkalibur {
    constructor(sila){
        this.sila = sila
    }
    uronExkalibur(mestoprilozh){
        mestoprilozh.uron(this.sila)
    }
}
const vrag1 = new Vrag(100)
console.log(vrag1)
const exkalibur1 = new Exkalibur(20)
console.log(exkalibur1)
exkalibur1.uronExkalibur(vrag1)
console.log(vrag1)
exkalibur1.uronExkalibur(vrag1)
console.log(vrag1)
class Ork extends Vrag{
    constructor(heals){
        super(heals)
    }
    uron(a){
        if (Math.random() <= 0.5){
            return
        }
        this.heals = this.heals - this.pervhels / 100 * a
    }
}
const ork1 = new Ork(100)
console.log(ork1)
exkalibur1.uronExkalibur(ork1)
console.log(ork1)
exkalibur1.uronExkalibur(ork1)
console.log(ork1)
exkalibur1.uronExkalibur(ork1)
console.log(ork1)
exkalibur1.uronExkalibur(ork1)
console.log(ork1)
//Паттерн Builder и chaining (return this):
class BuildHome{
    home = {}
    addRoof(roof){
        this.home.roof = roof
        return this//Нужно возвращать сам класс, чтобы методы можно было применять цепочкой
    }
    addFloor(){
        this.home.floor = 'Floor'
        return (this)
    }
    execute(){
        return this.home//Возвращает сам построенный дом, а не класс BuildHomee
    }
}
const antonHome = new BuildHome().addRoof('Red roof').addFloor().execute()
console.log(antonHome)

//Класс иногда можно заменить объектом:
class User{
    role = 'user'
    get weuRole(){
        return this.role
    }
}
const Userr = {
    role: 'user',
    get weuRole(){
        return this.role
    }
}
function logRole(chel){
    console.log(`Role: ${chel.weuRole.toUpperCase()}`)   
}
const user1 = new User()
logRole(user1)
logRole(Userr)
