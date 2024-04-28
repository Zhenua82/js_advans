'use strict';

//ES6 модули (этот скрипт в файле index прописывать не надо):
function add(x, y){
    return x + y
}function sub(x, y){
    return x - y
}const b$1 = 89;
console.log(b$1);//Выполнится первым, а лишь затем все остальное в файле куда был export
console.log('testES6');
setTimeout(()=> {//Меняем функцию add на умножение через 6 сек
    add = function(x, y){
        return x*y
    };
}, 6000);
// export const res = await getProd();//Здесь await работать будет (в ES6 модулях он 
// //не вызывает ошибки - await на верхнем уровне), но при сборке rullup - он не работает

//Сборщик rollup:
// npm i -g rollup //установка ролап - сборщик(bundle) через терминал,
// его документация - https://rollupjs.org/introduction/:
//в терминале указываем какой файл входной, и какой выходной и формат: 
// rollup 17bundle.js --file bundle.js --format iife
//выкидывает неиспользуемый код (const a = 1)
//rollup main.js --file bundle.js --format umd --name "myBundle" - формат сборщика для устаревших браузеров
//Не поддерживает await на верхнем уровне - вызывает ошибку (поэтому его нужно перед сборкой 
//закоментировать - если он вообще не нужен)
//Не забывать прописывать в html для созданного файла bundle.js defer

const b = 3;
console.log(add(3541, 36543));
console.log(sub(0, 2));
console.log(b);
