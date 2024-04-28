import { DivComponent } from "../../common/div-component";
import './cardlist.css';

export class Cardlist extends DivComponent{
    constructor(state){
        super();
        this.state = state
    };

    render(){
        if (this.state.loading == true){
            this.elem.innerHTML = '<div class="merc cardlist">Идет поиск <span>...</span></div>';
        } else {
            this.elem.innerHTML = `
            <h1 class="cardlist">
                Найдено книг – ${this.state.numFound}
            </h1>`;
        };
        return this.elem;
    }
}