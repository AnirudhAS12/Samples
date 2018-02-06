import {tdiv} from '../read/taskAdder.js';
import {node} from './addTask.js';
export const deleteALL =()=>
{
    let status=document.getElementsByClassName("Done");
    for(let i=0;i<status.length;i++)
    {
        if(status[i].checked)
        tdiv.removeChild(node[status[i--].name]);
    }
}