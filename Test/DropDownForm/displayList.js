// import arr1 from './submitform1.js';
// import arr2 from './submitform2.js';
export var arr1=[];
export var arr2=[];
var displayList;
export default displayList = () =>
{
    var list=``;
    arr1.forEach(item =>{
          
        var temp =`
        
       <div class="container">
       
        <div class="col-sm-4" > <div class="panel panel-success" style = "background-color: #dedef8; 
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;"><div class="panel-body "><div class="panel-footer"> 
         <table><tr><td>
        First Name :</td><td> ${item.first_name}</td></tr>
       <tr><td> Last Name :</td><td>${item.last_name}</td></tr>
         <tr><td>Mothers's Name :</td><td>${item.mothers_name}</td></tr>
        <tr><td>Father's name :</td><td>${item.fathers_name}</td></tr>
        <tr><td>Age :${item.age}</td></tr></table></div></div></div></div>
        `;
     list=list+temp;
    });
    

    arr2.forEach(item1 =>{
    var temp1 =`
        <div class="container">
       
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
    });

    console.log(list);
    document.getElementById("list").innerHTML=list;
}
