var display = [" "];
var ind = 0;

var addNewElement = () => {
    display[ind] = document.getElementById("enter").value;
    console.log(display[ind]);
    var li = document.createElement("LI");
    li.id = ind;



    li.innerHTML = "<div id=d" + ind + ">" + display[ind] + "</div>"+
    "<div class=container>"+
    "<div class=row>"+
    "<form>"+
    "<div class=col-sm-4><input type=radio onclick=tododdel(" + ind + ") name=check id=Td" + ind + " checked>ToDO</input></div>"+
    "<div class=col-sm-4><input type=radio onclick=inpddel(" + ind + ") name=check id=Ip" + ind + ">InProgress</input></div>"+
    "<div class=col-sm-4><input type=radio onclick=dodel(" + ind + ") name=check id=Do" + ind + ">Done</input></div>"+
    "<button style=display:none id=del" + ind + " onclick=deleted(" + ind + ")>Delete</button>"+
    "</form></div></div></br>"
    ul.appendChild(li);
    document.getElementById("d" + ind).setAttribute("style", "color: red;font-size:36px; font-family: Times New Roman");

    document.getElementById("del" + ind).className = "btn btn-danger";
    
    ind++;
}