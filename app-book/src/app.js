'use strict'
import './components/card.css';
import { MainView,  View1, Error404 } from './views/main/main';

class App{
    routes = [
        {path: "", view: MainView},
        {path: "#1", view: View1},
        {view: Error404}
    ];
    appState = {
        favorites: []
    }

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
        this.currentView = new view(this.appState);
        this.currentView.render()
    }
}
new App();

// try{} catch(e){console.error(e)}