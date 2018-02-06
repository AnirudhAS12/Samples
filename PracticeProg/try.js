function makeLine(length) {
  var line = "";
  
  for (j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
  
}

makeLine();
function buildTrianle(length)
{
    for(var i=1;i<=length;i++)
    {
        console.log(makeLine(i));
    }
}
buildTrianle(10);
