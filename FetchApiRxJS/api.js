import {
    Observable
} from 'rxjs';

document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getOnlineAPI').addEventListener('click', getOnlineAPI);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText() {
    Observable.fromPromise(fetch('sample.txt')
            .then((res) => res.text()))
        //.then((data)=>{})
        .subscribe((data) => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => {
            console.log("error")
        })

}

document.getElementById('getText').addEventListener('click', getText);


function getUsers() {
    Observable.fromPromise(fetch('users.json')
            .then((res) => res.json()))
        //.then((data)=>{})
        .subscribe((data) => {
            let output = `<h2>Users</h2>`;
            data.userdetails.forEach((user) => {
                output += `
            <ul>
            <li> First Name :${user.firstName}</li>
            <li> Second Name :${user.lastName}</li>
            
            </ul>`
            });
            document.getElementById('output').innerHTML = output;
        })
}

// function addPoste(e)
// {
// e.preventDefault();
// let title=document.getElementById('title').value;
// let body=document.getElementById('body').value;      


// fetch()    
// }



function getOnlineAPI() {
    console.log("get API")
    let cricObservable = Observable.fromPromise(fetch("http://cricapi.com/api/matches/6p8OviumH5Ub0Y9N7C7AY5pUQ8I2")
            .then((res) => res.json())
        )
        .subscribe((data) => {
            console.log(data);
            console.log(data.matches.filter(match => match.type==="Test"));
            let output = `<h2>Users</h2>`;
            data.matches.forEach((post) => {
                output += `
            <div>
            <h3>${post.date}</h3>
             <p>${post.unique_id}</p>
           </div>
            `
            });
            document.getElementById('output').innerHTML = output;
        })
}