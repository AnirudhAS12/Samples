import Form2 from './Form2.js';

import {arr2} from './displayList.js';
import displayList from './displayList.js';
var submitform2;
export default submitform2=()=>
{
   var MID=document.forms['form2'].MID.value;
   if(MID =="")
   {
       alert("MID must be filled");
       return false;
   }
   var first_name=document.forms['form2'].first_name.value;
   if(first_name =="")
   {
       alert("firstname must be filled");
       return false;
   }
   var last_name=document.forms['form2'].last_name.value;
   if(last_name =="")
   {
       alert("lastname must be filled");
       return false;
   }
   var track=document.forms['form2'].track.value;
   if(track =="")
   {
       alert("track must be filled");
       return false;
   }

   var data2=new Form2(MID,first_name,last_name,track);
   
   arr2.push(data2);
   displayList();
   document.forms["form2"].reset();
}
