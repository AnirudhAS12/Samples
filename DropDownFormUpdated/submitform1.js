import Form1 from './Form1.js';
import {arr1} from './displayList.js';
import displayList from './displayList.js';
import {first_name,last_name,mothers_name,fathers_name,age} from './Form1.js';
var submitform1;
export default submitform1=()=>
{
    var first_name=document.forms['form1'].first_name.value;
    if (first_name == "") {
        alert("First Name must be filled out");
        return false;
    }
    var last_name=document.forms['form1'].last_name.value;
        if (last_name == "") {
        alert("Last Name must be filled out");
        return false;
    }
    var mothers_name=document.forms['form1'].mothers_name.value;
    if (mothers_name == "") {
        alert("Mothers name must be filled out");
        return false;
    }
    var fathers_name=document.forms['form1'].fathers_name.value;
    if (fathers_name == "") {
        alert("Fathers Name must be filled out");
        return false;
    }
    var age=document.forms['form1'].age.value;
    if (age == "") {
        alert("Age must be filled out");
        return false;
    }

    var data=new Form1(first_name,last_name,mothers_name,fathers_name,age);
    
    arr1.push(data);
    
    displayList();
    document.forms["form1"].reset();
}