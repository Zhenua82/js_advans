- npm i -g live-server - установка live-server
- npm init - установка нового приложения (формирование файла package.json с пропиской скриптов для плагинов: "scripts": {
    "build": "rollup -c --watch",
    "start": "live-server"
  },) (после установки этих плагинов их можно будет запускать командой: npm run (и команда, например, build) )
- npm init @eslint/config - установка плагина eslint для поддержки единой структуры кода в приложении
- npm i -D rollup - установка сборщика rollup
- npm install @rollup/plugin-node-resolve --save-dev - установка плагина rollup/plugin-node-resolve в devDependencies для запаковывания внешних зависимотей (позволяет rollup работать с модулями Node.js, разрешая их импорты)
- npm i -D rollup-plugin-import-css - установка плагина rollup-plugin-import-css в devDependencies для сборки css файлов
- создание файла .gitignore в котором указываем: /node_modules
- создание файла rollup.config.js - для задания конфигурации работы rollup (указываем точку входа, куда выгружать файлы)
- в файле package.json обязательно указать: "type": "module" - для работы с ES6 модулями (иначе при сборке будет ошибка) и прописать: "build": "rollup -c --watch" где -c означает, что конфигурацию rollup нужно брать из конфикурационного файла, а --watch билдить каждый раз при наличии изменений
- npm run build - делаем сборку
- npm i on-change - установка плагина on-change для отслеживания изменений объектов в классах
- npm run build
