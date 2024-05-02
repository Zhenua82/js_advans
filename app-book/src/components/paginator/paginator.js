import { DivComponent } from "../../common/div-component";
import './paginator.css';

export class Paginator extends DivComponent{
    constructor(state){
        super();
        this.state = state
    }
    render(){
        this.elem.classList.add('paginator');
        this.elem.innerHTML =`<div class="paginator__left pag_comm">
        <img src="./static/arrow_left.png" alt="Лево">
        Предыдущая страница
        </div>
        <div class="paginator__right pag_comm">
        Следующая страница
        <img src="./static/arrow_right.png" alt="Right">
        </div>`;
        return this.elem
    };
}