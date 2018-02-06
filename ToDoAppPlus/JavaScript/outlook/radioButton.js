import {tftr} from './taskFooter.js';
import {addRadio} from './addRadio.js';
export let div;
export const radioButton=()=>
{
    div=document.createElement("DIV");
    div.setAttribute("class","radioDiv container-fluid");
    addRadio("ToDo");
    addRadio("in Progress");
    addRadio("Done");
    tftr.appendChild(div);
}