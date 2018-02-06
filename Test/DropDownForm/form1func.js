import Form1 from './Form1.js';
import submitform1 from './submitform1.js';
var form1;
export default form1=()=> {
    var form1=`

    <form id='form1'>
    <div class="container">
    
     <div class="form-group">
    <label for="first_name"> First Name</label>
    <input type="text" class="form-control" name="first_name" required><br>
    </div>
     <div class="form-group">
    <label for="last_name"> Last Name</label>
    <input type="text" class="form-control" name="last_name" required><br>
    </div>
     <div class="form-group">
    <label for="mothers_name"> Mothers Name</label>
    <input type="text" class="form-control" name="mothers_name" required><br>
    </div>
     <div class="form-group">
    <label for="fathers_name"> Fathers Name</label>
    <input type="text" class="form-control" name="fathers_name" required><br>
    </div>
     <div class="form-group">
    <label for="age"> Age</label>
    <input type="text" class="form-control" name="age" required><br>
    </div>
    
     <div class="form-group">
    <button type="button" class="btn btn-success" id="submitform1">Submit</button> 
    </div>
    </div>
   </form>
    `

    document.getElementById("forms").innerHTML=form1;
   document.getElementById("submitform1").addEventListener("click",submitform1);
}

 document.getElementById("form1").addEventListener("click",form1);