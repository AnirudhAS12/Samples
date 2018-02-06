const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = 'Hello world!';
div.appendChild(h1);
document.body.appendChild(div);

// const header = document.createElement('header');
const shadowRoot = div.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>'; 