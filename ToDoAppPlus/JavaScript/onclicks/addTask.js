import {tdiv} from '../read/taskAdder.js';
import {taskHeader} from '../outlook/taskHeader.js';
import {taskArticle} from '../outlook/taskHeader.js';
import {taskFooter} from '../outlook/taskHeader.js';

export let node=[],count=0,taskdiv;
export const addTask = () =>
{
    taskDiv=document.createElement("DIV");
    node.push(taskDiv);
    taskdiv.setAttribute("id",count);
    taskDiv.setAttribute("class","taskCard panel panel-danger col-sm-5");
    taskheader();
    taskbody();
    taskfooter();
    tdiv.appendChild(taskDiv);

    count++;
    document.getElementById("inp").value="";
}