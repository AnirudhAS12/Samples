function addNewItem(list, itemText)
{
    var listItem = document.createElement("li");
    listItem.innerText=itemText;

    list.appendChild(listItem);
}
var btnNew=document.getElementById("btnAdd");
btnNew.onclick = function(){
    

    var item=document.getElementById("item");

     var itemText=item.value;
      //var itemText=prompt("Enter the name of item");

    if(!itemText || itemText=="")
    {
        return false;
    }
    addNewItem(document.getElementById("todoList"),itemText);
}