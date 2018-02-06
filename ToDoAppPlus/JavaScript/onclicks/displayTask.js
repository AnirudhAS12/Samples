import {sel} from '../read/filter.js';
export const displayTask =() =>
{
    let inp=document.querySelectorAll("input");
    for(let i=0;i<inp.length;i++)
    {
        document.getElementById(inp[i].name).style.display='';
    }
    for(let i=0;i<inp.length;i++)
    {
        if(sel.value=='All Task')
        document.getElementById(inp[i].name).style.display='';
        else if(inp[i].checked && inp[i].className!=sel.value)
        document.getElementById(inp[i].name).style.display='none';
    }
}