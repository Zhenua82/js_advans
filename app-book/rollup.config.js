import css from 'rollup-plugin-import-css';
import {nodeResolve} from '@rollup/plugin-node-resolve';
// в package.json "build": "rollup -c", -c -означает использовать этот конфигурационный файл

export default {
	input: 'src/app.js',
	output: {
		// file: 'bundle.js',
        dir: "dist",
		format: 'iife'    
	},
    plugins: [css({
        output: 'style.css' // Указываем, куда сохранять CSS-файлы
      }), 
      nodeResolve()]
};