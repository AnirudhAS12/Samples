import {foot} from '../read/readFooter.js';
import {deleteAll} from '../onclicks/deleteAll.js';
const addDelete =()=>
{
    let del = document.createElement("button");
    del.textContent="Delete the completed tasks";
    del.setAttribute("class","btn btn-danger");
    del.onclick=deleteAll;
    foot.appendChild(del);
};