import {count} from '../onclicks/addTask.js';
import {div} from './radioButton.js';
export const addRadio = (name) =>
{
    let sp=document.createElement("span");
    let lab=document.createElement("label");
    lab.textContent=name;
    sp.appendChild(lab);
    let inp=document.createElement("input");
    inp.setAttribute("type",radio);
    inp.setAttribute("id",name+count);
    inp.setAttribute("name",count);
    inp.setAttribute("class",name);
    if(name=="ToDo")
    inp.setAttribute("checked",true);
    lab.appendChild(inp);
    div.appendChild(sp);
    

}