import { DivComponent } from "../../common/div-component";
import './card.css';

export class Card extends DivComponent{
    constructor(appState, state){
        super();
        this.appState = appState;
        this.state = state
    };

    render(){
        let proverka = this.appState.favorites.find(el => el.title == this.state.title);
        // let proverka = this.appState.favorites.find(el => el.key == this.state.key);
        this.elem.classList.add('list-card');
        this.elem.innerHTML = `
        <div class="card">
        <div class="photo__card">
            <img src="https://covers.openlibrary.org/b/olid/${this.state.cover_edition_key}-M.jpg" alt="Photo">
        </div>
        <div class="footer__card">
            <div class="teg__footer__card">${this.state.subject ? this.state.subject[0] : 'Тег не определен'}</div>
            <div class="title__footer__card">${this.state.title}</div>
            <div class="auther__footer__card">${this.state.author_name ? this.state.author_name[0] : 'Автор не указан'}</div>
            <button class="favor__footer__card ${proverka ? 'favor-active' : ''}"><img src="${proverka ? './static/add-white.png' : './static/add.png'}" alt="Favor"></button>
        </div>
    </div>`;
        return this.elem;
    };
}
/* <img src="https://covers.openlibrary.org/b/isbn/${this.state.isbn ? this.state.isbn[0] : '9780385533225'}-M.jpg" alt="Photo"></img> */