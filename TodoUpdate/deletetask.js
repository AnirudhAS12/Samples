var tododdel = (ind) => {
    document.getElementById("del" + ind).style.display = "none";
}
var inpddel = (ind) => {
    document.getElementById("del" + ind).style.display = "none";
}
var dodel = (ind) => {
    document.getElementById("del" + ind).style.display = "unset";
}
var deleted = (ind) => {

    document.getElementById(ind).remove();
}
