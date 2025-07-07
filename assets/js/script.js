// toggle var;
let state = false;
let element = document.querySelector('#ele1');
//intial look:
element.style.backgroundColor = 'green';
element.style.color = 'white';


//función Cambio de color
const pintarArea = (ele, color = 'green') => {
    ele.style.backgroundColor = color;
}


//listener
element.addEventListener('click', (e) => {
    state = !state;
    if(state){
        pintarArea(e.target, 'yellow');
    }else{
        pintarArea(e.target);
    }
});