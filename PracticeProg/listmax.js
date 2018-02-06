var listmax =() =>{


var m=3;
var k=100;
var a=[1,2,3];
var b=[2,5,4];

var arr=[0,0,0,0,0];
var max=0;
for(let i=0;i<5;i++)
{
    for(let j=a[i]-1;j<b[i];j++)
    {
        arr[j]+=k;
    }
}

for(let k=0;k<5;k++)
{
    console.log(arr[k]);
}

for(let k=0;k<5;k++)
{
if(arr[k]>max)
{
    max=arr[k];
}

}
console.log("the maximum value is:")
console.log(max);


};
listmax();