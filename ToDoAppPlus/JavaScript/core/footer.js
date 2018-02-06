import {maindiv} from './main.js';
export const footer =() =>
{
    let mainft=document.createElement("footer");
    mainft.setAttribute("class","panel-footer");
    let foot=document.createElement("h5");
    foot.textContent="copyrigths 2017";
    mainft.appendChild(foot);
    maindiv.appendChild(mainft);
}