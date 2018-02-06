var maxDiffArr = () =>
{
var max=0;
var maxind=0;
var diff=0;
var arr=[2,3,5,2,6,10,9,2];

for(var i=0;i<8;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
        maxind=i;
    }
}
for(var j=0;j<i;j++)
{
    if(diff<max-arr[j])
    {
        diff=max-arr[j];
    }
}
console.log(diff);
}
maxDiffArr();