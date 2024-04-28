import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent{
    constructor(state){
        super();
        this.state = state
    };
    search(){
        this.state.searchQuery = document.querySelector('.search__input').value;
    };
    render(){
        this.elem.classList.add('search');
        this.elem.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text" 
                    class="search__input" 
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                    placeholder="Найти книгу или автора...."
                >
                <img src="./static/search.svg" alt="Search">
            </div>
            <button class="button__search">
                <img src="./static/search-white.svg" alt="search-white">
            </button>
        `;
        this.elem.querySelector('button').addEventListener('click', this.search.bind(this));
        this.elem.querySelector('input').addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.search();
            }
        });
        return this.elem;
    }
}