var CountingPairs =()=>
{

var count=0;
var k=1;
var arr=[1,1,2,2,3,3];
for(let i=0;i<6;i++)
{
    for(let j=i+1;j<6;j++)
    {
        
     if(arr[i]+k==arr[j])
    {
     arr[j]=0;   
count+=1;
    }
    }
}
console.log(count);
};
CountingPairs();