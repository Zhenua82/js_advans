import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import onChange from 'on-change';
import { Search } from "../../components/search/search";
import {Cardlist} from "../../components/cardlist/cardlist";
import {Card} from "../../components/card/card";
import { Paginator } from "../../components/paginator/paginator";

export class MainView extends AbstractView {
    constructor(appState){
        super();
        this.setTitle('Поиск книг');
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this))
    };
    destroy(){
        // console.log('destroy');
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    };
    // state = DATABASE ? DATABASE : {
    //         list: [],
    //         loading: false,
    //         searchQuery: undefined,
    //         offset: 0,
    //         numFound: 0
    //     };
    state = DATABASE;
    HABBITS_KEY = 'HABBITS_KEY';
    FAVOR_KEY = 'FAVOR_KEY';
    saveData(){
        localStorage.setItem(this.HABBITS_KEY, JSON.stringify(this.state));
        localStorage.setItem(this.FAVOR_KEY, JSON.stringify(this.appState.favorites));
      };
    appStateHook(path){
        if (path === 'favorites'){
            // console.log(this.appState.favorites.at(-1))
            this.render();
        }
    };
    async stateHook(path){
        // if (path === 'searchQuery' || path === 'offset'){
        if (path === 'searchQuery'){
            this.state.loading  = true;
            const data = await this.loadlist(this.state.searchQuery);
            // console.log(data.docs);
            // this.state.list = data.docs.slice(this.state.offset, this.state.offset + 6);
            this.state.list = data.docs;
            this.state.numFound = data.numFound;
            this.state.loading  = false;
        }
        if (path === 'list' || path === 'loading'){
            this.render()
        }
        if (path === 'offset'){
            this.render()
        }
    };
    async loadlist(q){
        const resp = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${this.state.offset}`);
        // const resp = await fetch(`https://openlibrary.org/search.json?q=${q}&mode=everything`);
        const prod = await resp.json()
        return prod
    }
    render(){
        this.saveData();
        this.app.innerHTML ='';
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
        main.append(new Cardlist(this.state).render());
        this.app.append(main);
        this.renderHeader();
        this.app.append(this.commun());
        this.paginator()
        
    };
    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    };
    commun(){
        const com = document.createElement('div');
        com.classList.add('commun');
        this.state.list.slice(this.state.offset, this.state.offset + 6).forEach(element => {
            com.append(new Card(this.appState, element).render()) });
        return com  
    };
    paginator(){
        const pagin = new Paginator(this.state).render();
        if (this.state.list.length > 0){
            this.app.append(pagin);
            const pagin_btn_left = document.querySelector('.paginator__left');
            const pagin_btn_right = document.querySelector('.paginator__right');
            pagin_btn_left.addEventListener('click', this.clic_btn_left.bind(this));
            pagin_btn_right.addEventListener('click', this.clic_btn_right.bind(this));
        }   
    };
    clic_btn_right(){
        this.state.offset = this.state.offset + 6
        return this.state.offset    
    };
    clic_btn_left(){
        if (this.state.offset > 0){
            this.state.offset = this.state.offset - 6
        }
        return this.state.offset    
    }
};
export class Error404 extends AbstractView {
    constructor(){
        super();
        this.setTitle('404');
    }
    render(){
        this.app.innerHTML ='';
        const main = document.createElement('div')
        main.innerHTML = 'Ошибка 404'
        this.app.append(main)
    }
    destroy(){
        console.log('destroy')
    }
}