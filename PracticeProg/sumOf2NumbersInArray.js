var sumOf2NumbersInArray = () =>
{
    var arr= [1,3,46,1,3,9,4];
    var k=47;
    var count=0;
var temp=0;
    for(var i=0;i<6;i++)
    {
        for(var j=0;j<6-i;j++)
        {
         if(arr[j]>arr[j+1])
         {
             temp=arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=temp;
         }
      } 
    }

    for(var i=0;i<7;i++)
    {
        for(var j=i+1;j<7;j++)
        {
            if(arr[i]+arr[j]==k)
            {
            arr[j]=0;
            count+=1;
            }
        }
    }
    console.log(count);
};
sumOf2NumbersInArray();