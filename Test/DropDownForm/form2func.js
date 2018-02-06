
import Form2 from './Form2.js';
import submitform2 from './submitform2.js'
var form2;
export default form2=()=>
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
     <button type="button" class="btn btn-success"  id="submitform2"> Submit </button>
     </div>

     </div>
   </form>
    `;

    document.getElementById("forms").innerHTML=form2;
    document.getElementById("submitform2").addEventListener("click",submitform2);
    

}
 document.getElementById("form2").addEventListener("click",form2);