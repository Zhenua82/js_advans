import { DivComponent } from "../../common/div-component";
import './header.css';

export class Header extends DivComponent{
    constructor(appState){
        super();
        this.appState = appState
    }
    render(){
        // this.elem.innerHTML ='';
        this.elem.classList.add('header');
        this.elem.innerHTML =`<div>
        <img src="./static/logo.svg" alt="Лого">
        </div>
        <div class="menu">
            <a class="menu__item" href="#" target="_blank">
                <img src="./static/search.svg" alt="Поиск">
                <div class="menu__item__text">Поиск книг</div>
            </a>
            <a class="menu__item" href="#">
                <img src="./static/favorites.svg" alt="Избранное">
                <div class="menu__item__text">Избранное</div>
                <div class="menu__caunter">${this.appState.favorites.length}</div>
            </a>
        </div>`
       ;
        return this.elem
    }
}