'use strict';
//Принципы ООП (SOLID):
// 1. single responsibility - Принцип единой ответственности: 
// У класса должна быть только одна ответственность и другую ответств он на себя брать не должен.
class Person {
    #inventar = []
    #heals
    constructor(heals){
        this.#heals = heals
    }
    addInventar(item){
        this.#inventar.push(item)
    }
    // save(){ //Метод save - здесь лишний и это не правильно, его нужно вынести в другой класс
    //     localStorage.setItem('text', JSON.stringify(this.#inventar))
    //     console.log('Данные сохранены')
    // }
    a = 7
    save = new Db().save(this.a)  
}
// Правильно сделать отдельный класс ответственный за работу с БД:
class Db{
    save(item){
        localStorage.setItem('textt', item)
        console.log('Данные сохранены')
    }
    load(){
        //
    }
}
let chel = new Person(20)
chel.addInventar('pushka')
chel.save

// 2. open–closed - Принцип открытости/закрытости:
// Сущности в классах должны быть открыты для расширения, но закрыты для модификации
// Неправильный вариант (в случае расширения, например, добавления брильянтов стоимостью 20, 
// придется изменять - дописывать (модифицировать) другой класс - Storage):
class Sokrovisha{}
class Coins extends Sokrovisha {}
class Cristal extends Sokrovisha{}
class Storage {
    summ = 0
    addSumm(item){
        if(item instanceof Coins){
            this.summ += 1}
        if(item instanceof Cristal){
            this.summ += 5}
    }
}
const coin = new Coins()
const cristal = new Cristal()
const stor = new Storage()
stor.addSumm(coin)
stor.addSumm(cristal)
console.log(stor.summ)
// Правильный вариант:
class Sokrovishaa{}
class Coinss extends Sokrovishaa {cena = 1}
class Cristall extends Sokrovishaa{cena = 5}
class Storagee {
    #summ = Number()
    addSumm(item){
        this.#summ += item      
    }
    get summ(){
        return this.#summ
    }
}
const coinn = new Coinss()
const cristall = new Cristall()
const storr = new Storagee()
storr.addSumm(coinn.cena)
storr.addSumm(cristall.cena)
console.log(storr.summ)

// 3. Liskov substitution - Принцип подстановки Барбары Лисков:
// функции, которые используют базовый тип, должны иметь возможность использовать подтипы 
// базового типа не зная об этом (исли есть частный класс от общего, то его без проблем можно заменить на него)
class User{
    #role = 'user'
    get weuRole(){
        return this.#role
    }
}
class Admin extends User{
    #role = ['user', 'admin']
    get weuRole(){//Без переопределения этого метода функция logRole(chel) не сможет правильно отработать
        return this.#role.join(', ')
    }
}
function logRole(chel){
    console.log(`Role: ${chel.weuRole.toUpperCase()}`)
}
const user1 = new User()
const admin1 = new Admin()
logRole(user1)
logRole(admin1)

// 4. interface segregation - Принцип разделения интерфейса:
// много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс 
// общего назначения
class Humen{
    live = 20
    getDamage(damage){
        this.live += damage
    }
}
class Weapon{
    damage = 0
    makeDamage(level){
        this.damage -= level
    }
    // shoot(){//Здесь shoot(выстрел) будет ошибкой - не всё оружие стреляет
    //     this.makeDamage(10)
    // }
}
class Pistol extends Weapon{
    shoot(){
        this.makeDamage(10)
    }
}
class Knife extends Weapon{
    strike(){
        this.makeDamage(3)
    }
}
const pistol1 = new Pistol()
const knife1 = new Knife()
const humen1 = new Humen()
knife1.strike()
humen1.getDamage(knife1.damage)
console.log(humen1.live)
pistol1.shoot()
humen1.getDamage(pistol1.damage)
console.log(humen1.live)

// 5. dependency inversion - Принцип инверсии зависимостей:
// Нужно делать зависимости на Абстракции, а не на что-то конкретное
class Massiv{
    znachenie = [1, 2, 3];
    constructor(db){
        this.db = db
    };
    saveData(){
        this.db.save(this.znachenie);
    };
    // saveData(){//Эта функция - частный вариант, так писать нельзя! Нужно абстрагироваться (для других возможных БД)
    //     new Sql().save(this.znachenie);
    // }
}
class Sql{
    save(data){
        console.log(`Данные ${data} в sql сохранены`);
        return data
    }
}
class MongoDb{
    save(data){
        console.log(`Данные ${data} в МонгоДб сохранены`);
        return data
    }
}
const massive1 = new Massiv(new Sql)
const massive2 = new Massiv(new MongoDb)
massive1.saveData()
massive2.saveData()
