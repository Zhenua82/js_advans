import { AbstractView } from "../../common/view";
import { Header } from "../../components/header/header";
import onChange from 'on-change';
import {Cardlist} from "../../components/cardlist/cardlist";
import {Card} from "../../components/card/card";

export class View1 extends AbstractView {
    constructor(appState){
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Избранное');
    }
    destroy(){
        // console.log('destroy')
        onChange.unsubscribe(this.appState)
    }
    appStateHook(path){
        if (path === 'favorites'){
            this.render()
        }
    };
    render(){
        this.app.innerHTML ='';
        const favor = document.createElement('h1');
        favor.innerHTML = 'Избранные книги'
        this.app.append(favor);
        this.renderHeader();
        this.app.append(this.commun());
    };
    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    };
    commun(){
        const com = document.createElement('div');
        com.classList.add('commun');
        this.appState.favorites.forEach(element => {
            com.append(new Card(this.appState, element).render()) });
        return com  
    }   
    
};