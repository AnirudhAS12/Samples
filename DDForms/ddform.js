var arr1=[];
var arr2=[];



displayList = () =>
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
      
    <div class="col-sm-4"><div class="panel panel-success"><div class="panel-body"><div class="panel-footer">
    ${item1.MID}<br>
    ${item1.first_name}<br>
        ${item1.last_name}<br>
        
        ${item1.track}<br>
        </div></div></div></div>
    `;
   list=list+temp1;
    });

    console.log(list);
    document.getElementById("list").innerHTML=list;
}

/*var displayList1 =() =>
{
    //for(type var: objects)
    var list1=``;
    arr2.forEach(item1 =>{
    var temp1 =`
    ${item1.MID}<br>
    ${item1.first_name}<br>
        ${item1.last_name}<br>
        
        ${item1.track}<br>
    `;
   list1=list1+temp1;
    });

    console.log(list1);
    document.getElementById("list").innerHTML=list1;

}*/

class Form1
{
    
    constructor(first_name,last_name,mothers_name,fathers_name,age)
    {
        this.first_name=first_name;
        this.last_name=last_name;
        this.mothers_name=mothers_name;
        this.fathers_name=fathers_name;
        this.age=age;
    }

   
}

class Form2
{
    constructor(MID,first_name,last_name,track)
    {
        this.MID=MID;
        this.first_name=first_name;
        this.last_name=last_name;
        this.track=track;
    }
  
}

var form1 = () =>{
    var form1=`

    <form id='form1'>
    <div class="container">
    
     <div class="form-group">
    <label for="first_name"> First Name</label>
    <input type="text" class="form-control" name="first_name"><br>
    </div>
     <div class="form-group">
    <label for="last_name"> Last Name</label>
    <input type="text" class="form-control" name="last_name"><br>
    </div>
     <div class="form-group">
    <label for="mothers_name"> Mothers Name</label>
    <input type="text" class="form-control" name="mothers_name"><br>
    </div>
     <div class="form-group">
    <label for="fathers_name"> Fathers Name</label>
    <input type="text" class="form-control" name="fathers_name"><br>
    </div>
     <div class="form-group">
    <label for="age"> Age</label>
    <input type="text" class="form-control" name="age"><br>
    </div>
    
     <div class="form-group">
    <button type="button" class="btn btn-success" onclick=submitform1()>Submit</button> 
    </div>
    </div>
   </form>
    `

    document.getElementById("forms").innerHTML=form1;
    
d
}




var form2 =() =>
{

    var form2=`
    <form id='form2'>
    <div class="container">
    
     <div class="form-group">
    <label for="MID"> MID </label>
    <input type="text" class="form-control" name="MID">
    </div>
    <div class="form-group">
    <label for="first_name"> First Name </label>
    <input type="text" class="form-control" name="first_name">
    </div>

    <div class="form-group">
    <label for="last_name"> Last Name </label>
    <input type="text" class="form-control" name="last_name">
    </div>

    <div class="form-group">
    <label for="track"> Track </label>
    <input type="text" class="form-control" name="track">
    </div>
    <div class="form-group">
     <button type="button" class="btn btn-success" onclick=submitform2()> Submit </button>
     </div>

     </div>
   </form>
    `

    document.getElementById("forms").innerHTML=form2;
    

}

var submitform1 =() =>
{
    var first_name=document.forms['form1'].first_name.value;
    var last_name=document.forms['form1'].last_name.value;
    var mothers_name=document.forms['form1'].mothers_name.value;
    var fathers_name=document.forms['form1'].fathers_name.value;
    var age=document.forms['form1'].age.value;

    var data=new Form1(first_name,last_name,mothers_name,fathers_name,age);
    
    arr1.push(data);
    
    displayList();
    document.getElementById("form1").reset();
}

var submitform2 =() =>
{
   var MID=document.forms['form2'].MID.value;
   var first_name=document.forms['form2'].first_name.value;
   var last_name=document.forms['form2'].last_name.value;
   var track=document.forms['form2'].track.value;

   var data2=new Form2(MID,first_name,last_name,track);
   arr2.push(data2);
   displayList();
   document.getElementById('form2').reset();
}

 //document.getElementById("forms").addEventListener("click",form1);
// document.getElementById("btn1").addEventListener("click",submitform1);
// document.getElementById("forms").addEventListener("click",form2);
// document.getElementById("btn2").addEventListener("click",submitform2);
