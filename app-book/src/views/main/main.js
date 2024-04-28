import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import onChange from 'on-change';
import { Search } from "../../components/search/search";
import {Cardlist} from "../../components/cardlist/cardlist";
import {Card} from "../../components/card/card";

export class MainView extends AbstractView {
    constructor(appState){
        super();
        this.setTitle('Поиск книг');
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this))
    };

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
        numFound: 0
    };
    appStateHook(path){
        console.log(path)
        if (path === 'favorites'){
            console.log(this.appState.favorites.at(-1))
        }
    };
    async stateHook(path){
        if (path === 'searchQuery'){
            this.state.loading  = true;
            const data = await this.loadlist(this.state.searchQuery);
            console.log(data.docs);
            this.state.list = data.docs;
            this.state.numFound = data.numFound;
            this.state.loading  = false;
        }
        if (path === 'list' || path === 'loading'){
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
        this.app.innerHTML ='';
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
        main.append(new Cardlist(this.state).render());
        // this.state.list.forEach(element => {
        //     main.append(new Card(this.appState, element).render()) });
        // main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        this.app.append(main);
        // this.appState.favorites.push('Dfg Toxikologie');
        this.renderHeader();
        // this.commun();
        this.app.append(this.commun());
    };
    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    };
    destroy(){
        console.log('destroy')
    };
    // commun(){
    //     // Получаем все элементы с классом "test"
    //     let testElements = document.getElementsByClassName('list-card');
    //     // Создаем новый элемент-контейнер
    //     let container = document.createElement('div');
    //     container.classList.add('commun');
    //     // Обходим все элементы "test" и перемещаем их в контейнер
    //     while (testElements.length) {
    //         container.appendChild(testElements[0]);
    //     }
    //     // Вставляем контейнер в DOM
    //     document.body.appendChild(container);
    // }   
    commun(){
        const com = document.createElement('div');
        com.classList.add('commun');
        this.state.list.forEach(element => {
            com.append(new Card(this.appState, element).render()) });
        return com  
    }   
};

export class View1 extends AbstractView {
    constructor(){
        super();
        this.setTitle('11111');
    }
    render(){
        this.app.innerHTML ='';
        const main = document.createElement('div')
        main.innerHTML = 'Hello 111'
        this.app.append(main)
    }
    destroy(){
        console.log('destroy')
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