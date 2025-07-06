boxOne = document.querySelector('#box-1');
boxTwo = document.querySelector('#box-2');
boxThree = document.querySelector('#box-3');
boxFour = document.querySelector('#box-4');





/*Por ahora, a falta de herramientas más sofisticadas,
se asigna un valor (booleano para determinar la condición
pintado de negro o no) a cada evento de cada elemento seleccionado.*/

let stateOne = false;
let stateTwo = false;
let stateThree = false;
let stateFour = false;


//Listener pinta de negro al hacer click (vuelve al color original si se hace click una segunda vez)
/* Decidí usar event.target (e.target) por ser una forma indirecta de seleccionar el elemento, y porque ya se usó el 
e.key en la guía por lo que no escapa excesivamente al alcance de la unidad (como podría ser en el caso de usar 'this'). 
*/

boxOne.addEventListener('click', (e) => {
    stateOne = !stateOne;

    if(stateOne){
        paintDiv(e)
    }else{
        paintDiv(e, 'blue');
    }
});

boxTwo.addEventListener('click', (e) => {
    stateTwo = !stateTwo;

    if(stateTwo){
        paintDiv(e)
    }else{
        paintDiv(e, 'red');
    }
});

boxThree.addEventListener('click', (e) => {
    stateThree = !stateThree;

    if(stateThree){
        paintDiv(e)
    }else{
        paintDiv(e, 'green');
    }
});

boxFour.addEventListener('click', (e) => {
    stateFour = !stateFour;

    if(stateFour){
        paintDiv(e)
    }else{
        paintDiv(e, 'yellow');
    }
});





//función estandar, que pinta elemento seleccionado de negro por defecto.
const paintDiv = (element, color = 'black') => {
    element.target.style.backgroundColor = color;
}