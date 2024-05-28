'use strict'
// import { MainView,  View1, Error404 } from './views/main/main';
import { MainView, Error404 } from './views/main/main';
import {View1} from './views/faivorits/faivorits';

class App{
    routes = [
        {path: "", view: MainView},
        {path: "#1", view: View1},
        {view: Error404}
    ];
    appState = {
        favorites: []
    };

    constructor(){
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    };
    route(){
        if (this.currentView){
            this.currentView.destroy()
        };
        let view
        if (this.routes.find(el => el.path == document.location.hash)){
            view = this.routes.find(el => el.path == location.hash).view;
        } else {view = Error404}
        // const view = this.routes.find(el => el.path == location.hash).view;
        const FAVOR_KEY = 'FAVOR_KEY'
        const favorString = localStorage.getItem(FAVOR_KEY);
        const favorArray = JSON.parse(favorString);
        // this.appState.favorites = favorArray; !!!!!!!!!!!!!!!!!!!!!!!
        this.appState.favorites = favorArray ? favorArray : [];

        this.currentView = new view(this.appState);
        this.currentView.render()
    }
}

let database = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
    numFound: 0
};
window.DATABASE = database;//Делаем глобальной переменную 
const HABBITS_KEY = 'HABBITS_KEY';
const FAVOR_KEY = 'FAVOR_KEY'
function loadData(){
    const habbitsString = localStorage.getItem(HABBITS_KEY);
    // const habbitsArray = JSON.parse(habbitsString); !!!!!!!!!!!!!!!!!!!!!!!!!
    const habbitsArray = JSON.parse(habbitsString) ? JSON.parse(habbitsString): {
        list: [],//При неправильных манипуляциях с localstorage - восстанавливаем его до правильных кондиций
        loading: false,
        searchQuery: undefined,
        offset: 0,
        numFound: 0
    };
    // const habbitsArray = {
    //     list: [],//При неправильных манипуляциях с localstorage - восстанавливаем его до правильных кондиций
    //     loading: false,
    //     searchQuery: undefined,
    //     offset: 0,
    //     numFound: 0
    // };
    DATABASE = habbitsArray;}

//init:
(function() {
    loadData();
})();
new App();

// try{} catch(e){console.error(e)}