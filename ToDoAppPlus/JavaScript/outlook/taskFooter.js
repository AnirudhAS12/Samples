import {radioButton} from './radioButton.js';
import {taskDiv} from '../onclicks/addTask.js';
import count from '../onclicks/addTask.js';
import {deleteTask} from '../buttons/deleteTask.js';
export let tftr;
export const taskFooter=()=>
{
tftr=document.createElement("footer");
radioButton();
deleteTask();
taskDiv.appendChild(tftr);
}