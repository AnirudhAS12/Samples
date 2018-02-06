import {foot} from '../read/readFooter.js';
import {addTask} from '../onclicks/addTask';

export const addButton = () =>
{
    let add=document.createElement("button");
    add.textContent="Add tasks to be done";
    add.setAttribute("class","btn btn-success");
    add.onclick=addTask;
    foot.appendChild(add);

}