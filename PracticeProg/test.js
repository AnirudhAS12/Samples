
var add = (a,b) => a+b;
function add(a,b)
{
    return (a+b);
}

var mul= (x,y) =>x*y;

console.log("Hello World");
console.log(add(2,3));
console.log(mul(2,3));

var x = 4 
var y = -x; 
console.log("value of x: ",x);  
console.log("value of y: ",y); 

function retStr() { 
   return "hello world!!!" 
}  
var val = retStr() 
console.log(val)


function factorial(num) { 
   if(num<=0) { 
      return 1; 
   } else { 
      return (num * factorial(num-1)  ) 
   } 
} ;
console.log(factorial(6));