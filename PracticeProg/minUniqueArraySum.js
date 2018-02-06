var unique = () => 

{
  var a= [3, 2, 1, 2, 7];
  var sum=0;
  var temp=0;
  for(var i=0;i<4;i++)
  {
    for(var j=0;j<4-i;j++)
    {
      if(a[j]>a[j+1])
         {
         temp=a[j];
         a[j]=a[j+1];
         a[j+1]=temp;
         }

    }
  }
  
  for(var i=0;i<5;i++)
  {
    if(a[i]==a[i+1])
    {
      a[i+1]+=1;
    }
  }
  
  for(var i=0;i<5;i++)
  {
   sum+=a[i]; 
  }
  console.log("the sorted array is:");
  for(var i=0;i<5;i++)
  {
  
    console.log(a[i]);
  }
  console.log("the unique sum of array is:");
  console.log(sum);
  
};
unique();