import {taskDiv} from '../onclicks/addTask.js';
export const taskHeader=()=>
{
    let hd=document.createElement("header");
    hd.setAttribute("class","panel-heading");
    let h=document.createElement("h4");
    h.textcontent="To Do";
    hd.appendChild(h);
    taskDiv.appendChild(hd);
}