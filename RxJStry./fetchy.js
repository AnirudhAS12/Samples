var createnode =()=>
{
    return document.createElement("elements");
}
var append =(parent,el)=>
{
    return parent.appendChild(el);
}
const ul=document.getElementById("Authors");
const url='https://randomuser.me/api/?results=10';

fetch(url)

    .then((resp) => resp.json().data)
    .then(function(data) 
    {
        let authors=data.results;
        return authors.map(function(author){
        {
              let li=createnode('li');
              let img=createnode('img');
              let span=createnode('span');

              img.src=author.picture.medium;

              span.innerHTML=`${author.name.first} ${author.name.last}`
              
              append(li,img);
              append(li,span);
            append(ul,li);        
        }
    })

})
.catch(function(error)
{
    console.log(JSON.stringify(error));

});