'use strict';
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
//npm install @rollup/plugin-node-resolve --save-dev - установка плагина rollup npm node resolve
//npm i -D rollup-plugin-import-css - установка плагина rollup-plugin-import-css
import {add, sub} from './16modulES6.js';
const b = 3;
console.log(add(3541, 36543));
console.log(sub(0, 2));
console.log(b)