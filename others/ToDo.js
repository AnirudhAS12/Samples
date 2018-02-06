
var i=0;
function newElement() 
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  
  var t = document.createTextNode(inputValue);
 
  li.appendChild(t);
   
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoUL").appendChild(li);
    
    
  }
  
  document.getElementById("myInput").value = "";


var radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', "option"+i);
var t = document.createTextNode("ToDo");



var radioInput1 = document.createElement('input');
radioInput1.setAttribute('type', 'radio');
radioInput1.setAttribute('name', "option"+i);
var u = document.createTextNode("InProgress");


var radioInput2 = document.createElement('input');
radioInput2.setAttribute('type', 'radio');
radioInput2.setAttribute('name', "option"+i);
var v = document.createTextNode("Done");

i++;
 li.appendChild(radioInput);
 li.appendChild(t);
 li.appendChild(radioInput1);
 li.appendChild(u);
 li.appendChild(radioInput2);
 li.appendChild(v);
  var span = document.createElement("SPAN");
  span.innerHTML=" <button> Delete </button>";
  span.className = "close";
  
  li.appendChild(span);

  
var close = document.getElementsByClassName("close");
var j;
for (j = 0; j < close.length; j++)
 {
  close[j].onclick = function() 
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}
  