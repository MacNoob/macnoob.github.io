/*let clicks = 0;
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;
function start() {
    button.onclick = () => display.textContent = clicks++;*/
    let click = 0;
    const display = document.querySelector('#display');
    const button = document.querySelector('.button');
      button.onclick = () => display.textContent = click++ ;
    
display.textContent('lol')