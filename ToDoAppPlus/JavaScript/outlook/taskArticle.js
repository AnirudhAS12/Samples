import {taskDiv} from '../oncliks/addTask.js';
export const taskArticle =() =>
{
    let arti=document.createElement("article");
    let txt=document.createElement("textarea");
    let txt=document.getElementById("inp").value;
    txt.setAttribute("class","taskTextinput-lg");
    txt.setAttribute("readonly","true");
    arti.appendChild(txt);
    taskDiv.appendChild(arti);
}