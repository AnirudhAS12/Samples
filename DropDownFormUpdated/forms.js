import Form1 from './Form1.js';
import Form2 from './Form2.js';
import displayList from './displayList.js';

import form1 from './form1func.js';
import submitform1 from './submitform1.js';
import form2 from './form2func.js';
import submitform2 from './submitform2.js';

//export  var arr1=[];
//export var arr2=[];
// var displayList = () =>
// {
//     var list=``;
//     arr1.forEach(item =>{
          
//         var temp =`
        
//        <div class="container">
       
//         <div class="col-sm-4" > <div class="panel panel-success" style = "background-color: #dedef8; 
//          box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;"><div class="panel-body "><div class="panel-footer"> 
//          <table><tr><td>
//         First Name :</td><td> ${item.first_name}</td></tr>
//        <tr><td> Last Name :</td><td>${item.last_name}</td></tr>
//          <tr><td>Mothers's Name :</td><td>${item.mothers_name}</td></tr>
//         <tr><td>Father's name :</td><td>${item.fathers_name}</td></tr>
//         <tr><td>Age :${item.age}</td></tr></table></div></div></div></div>
//         `;
//      list=list+temp;
//     });
    

//     arr2.forEach(item1 =>{
//     var temp1 =`
    {/*<div class="container">
       
        <div class="col-sm-4" > <div class="panel panel-success" style = "background-color: #dedef8; 
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;"><div class="panel-body "><div class="panel-footer"> 
         <table><tr><td>
        MID :</td><td> ${item1.MID}</td></tr>
       <tr><td> First Name :</td><td>${item1.first_name}</td></tr>
         <tr><td>Last Name :</td><td>${item1.last_name}</td></tr>
        <tr><td>Track :</td><td>${item1.track}</td></tr>
        </table></div></div></div></div>
    `;
   list=list+temp1;
    });*/}

//     console.log(list);
//     document.getElementById("list").innerHTML=list;
// }

// var form1 =()=> {
//     var form1=`

//     <form id='form1'>
//     <div class="container">
    
//      <div class="form-group">
//     <label for="first_name"> First Name</label>
//     <input type="text" class="form-control" name="first_name" required><br>
//     </div>
//      <div class="form-group">
//     <label for="last_name"> Last Name</label>
//     <input type="text" class="form-control" name="last_name" required><br>
//     </div>
//      <div class="form-group">
//     <label for="mothers_name"> Mothers Name</label>
//     <input type="text" class="form-control" name="mothers_name" required><br>
//     </div>
//      <div class="form-group">
//     <label for="fathers_name"> Fathers Name</label>
//     <input type="text" class="form-control" name="fathers_name" required><br>
//     </div>
//      <div class="form-group">
//     <label for="age"> Age</label>
//     <input type="text" class="form-control" name="age" required><br>
//     </div>
    
//      <div class="form-group">
//     <button type="button" class="btn btn-success" id="submitform1">Submit</button> 
//     </div>
//     </div>
//    </form>
//     `

//     document.getElementById("forms").innerHTML=form1;
//    document.getElementById("submitform1").addEventListener("click",submitform1);
// }




// var form2 =()=>
// {
//     var form2=`
//     <form id='form2'>
//     <div class="container">
    
//      <div class="form-group">
//     <label for="MID"> MID </label>
//     <input type="text" class="form-control" name="MID">
//     </div>
//     <div class="form-group">
//     <label for="first_name"> First Name </label>
//     <input type="text" class="form-control" name="first_name">
//     </div>

//     <div class="form-group">
//     <label for="last_name"> Last Name </label>
//     <input type="text" class="form-control" name="last_name">
//     </div>

//     <div class="form-group">
//     <label for="track"> Track </label>
//     <input type="text" class="form-control" name="track">
//     </div>
//     <div class="form-group">
//      <button type="button" class="btn btn-success"  id="submitform2"> Submit </button>
//      </div>

//      </div>
//    </form>
//     `

//     document.getElementById("forms").innerHTML=form2;
//     document.getElementById("submitform2").addEventListener("click",submitform2);
    

// }

// export var submitform1 =()=>
// {
//     var first_name=document.forms['form1'].first_name.value;
//     if (first_name == "") {
//         alert("First Name must be filled out");
//         return false;
//     }
//     var last_name=document.forms['form1'].last_name.value;
//         if (last_name == "") {
//         alert("Last Name must be filled out");
//         return false;
//     }
//     var mothers_name=document.forms['form1'].mothers_name.value;
//     if (mothers_name == "") {
//         alert("Mothers name must be filled out");
//         return false;
//     }
//     var fathers_name=document.forms['form1'].fathers_name.value;
//     if (fathers_name == "") {
//         alert("Fathers Name must be filled out");
//         return false;
//     }
//     var age=document.forms['form1'].age.value;
//     if (age == "") {
//         alert("Age must be filled out");
//         return false;
//     }

//     var data=new Form1(first_name,last_name,mothers_name,fathers_name,age);
    
//     arr1.push(data);
    
//     displayList();
//     document.forms["form1"].reset();
// }

// export var submitform2 =()=>
// {
//    var MID=document.forms['form2'].MID.value;
//    if(MID =="")
//    {
//        alert("MID must be filled");
//        return false;
//    }
//    var first_name=document.forms['form2'].first_name.value;
//    if(first_name =="")
//    {
//        alert("firstname must be filled");
//        return false;
//    }
//    var last_name=document.forms['form2'].last_name.value;
//    if(last_name =="")
//    {
//        alert("lastname must be filled");
//        return false;
//    }
//    var track=document.forms['form2'].track.value;
//    if(track =="")
//    {
//        alert("track must be filled");
//        return false;
//    }

//    var data2=new Form2(MID,first_name,last_name,track);
   
//    arr2.push(data2);
//    displayList();
//    document.forms["form2"].reset();
// }

//ocument.getElementById("form1").addEventListener("click",form1);

//document.getElementById("form2").addEventListener("click",form2);

