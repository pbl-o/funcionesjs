// variable que almacena color ( por ahora vacía)
let theColor = null;

//se selecciona el elemento del documento donde se ejecutarán los cambios de color sin adición/substarcción de elementos
const cuadro = document.querySelector('#key');

// Listener que se activará en la medida que tocar las teclas enumeradas a continuación:  
//se utiliza un opeardor tipo or (||) en vez de toLower, pero la función se tiene en cuenta para próximas tareas que requieran un trato similar.

document.addEventListener('keydown', (e) => {
   // solo cambio de color
   
    if(e.key === 'a'){
        theColor = 'pink';
        cambiarColor();
    }
    else if( e.key === 's'){
        theColor = 'orange';
        cambiarColor();
    }
        else if( e.key === 'd'){
            theColor = 'lightblue';
            cambiarColor();
    }

    // cambio de color + creación de elemento

        else if( e.key === 'q'){
        theColor = 'purple';
        agregarElemento(theColor);
    }
        else if( e.key === 'w'){
       theColor = 'gray';
       agregarElemento(theColor); 
    }
        else if( e.key === 'e'){
        theColor = 'brown';
        agregarElemento(theColor); 
        
    }


    //tecla para eliminar elementos
        else if( e.key === 'r'){
        eliminarElemento();
    }

    else{
        alert('Por favor, elige entre las teclas mencionadas en la leyenda al comienzo de la página.');
    }
});


//Contenedor de los nuevos elementos a generar (<section/>):
const section = document.querySelector('section');


//Función Cambio de color
let cambiarColor = (element = cuadro, color = theColor) => {
    element.style.backgroundColor = color;
};


// Función Agregar elemento:
/*Se crea un div con texto y una clase para fines estéticos, 
posteriormente se incorpora dentro de la sección del documento*/
let agregarElemento = (color) => {
    let newCuadro = document.createElement('div');
    newCuadro.innerText = 'Nuevo Elemento';
    //Para tratar propiedades de estilo ajenas a aquellas pedidas en el desafío, le atribuyo una clase que será tratada desde el css.
    newCuadro.setAttribute('class', 'newdiv');
    section.appendChild(newCuadro);
    cambiarColor(newCuadro, color)

}

//Función Eliminar elemento:
/* se seleccionan todos los div existentes dentro de la sección (contenedor)
del documento. Si la cantidad de elementos es mayor a 0 se remueve el último elemento agregado al array (cuadros.length - 1*/
let eliminarElemento = () => {
       let cuadros = section.querySelectorAll('div');
       if(cuadros.length > 0){
        section.removeChild(cuadros[cuadros.length - 1]);
       }

}