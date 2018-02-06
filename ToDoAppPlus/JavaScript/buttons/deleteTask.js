import {tftr} from '../outlook/taskFooter.js';
import {count} from '../onclicks/addTask.js';
import {tdiv} from '../read/taskAdder.js';
import {node} from '../onclicks/addTask.js'
export const deleteTask = () =>
{
    let butdiv=document.createElement("DIV");
    let delbut=document.createElement("button");
    delbut.textContent="Delete Task";
    delbut.setAttribute("class","btn btn-danger");
    delbut.setAttribute("name",count);
    delbut.onclick= function() 
    {
        if(document.getElementById("Done"+this.name).checked)tdiv.removeChild(node[this.name])
    }
    
    butdiv.appendChild(delbut);
    tftr.appendChild(butdiv);
}