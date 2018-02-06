import {maindiv} from './main.js';
export const header = () =>
{
    let mainhd=document.createElement("header");
    mainhd.setAttribute("class","panel-heading");
    let title=document.createElement("h1");
    title.textContent="ToDo APP";
    mainhd.appendChild(title);
    maindiv.appendChild(mainhd);

}