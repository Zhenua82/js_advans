//Модули commonjs (в браузерах в сыром виде не работают (дают ошибку) - для них необходим сборщик (бандлер))
//их работу можно проверить на nodejs (сборщики основаны на нем) - запускается командой в терминале:
// node 15modulcomm.js (node и адрес файла). Здесь уже последовательность файлов не важна
try{
    const{add, sub, DOM} = require('./14modul.js');
    console.log(add(22, 43));
    console.log(sub(42, 34))
    console.log(DOM.modul.add(4, 6)) 
    console.log('test2')
} catch(e){console.error(e)};