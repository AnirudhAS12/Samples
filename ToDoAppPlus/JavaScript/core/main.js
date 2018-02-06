import {header} from './header.js';
import {task} from '../read/taskReader.js';
import {footer} from './footer.js';
export let maindiv;
export const main =() =>
{
    let maindiv=document.createElement("DIV");
    maindiv.setAttribute("class","panel panel-success");
    header();
    task();
    footer();
    Body.appendChild(maindiv);
}