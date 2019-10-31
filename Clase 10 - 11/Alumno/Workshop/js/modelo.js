let h1titulo = document.getElementById('titulo');
let miInput = document.getElementById('miInput');
let miBoton = document.getElementById('miBoton');
//cambio el id
//h1titulo.id = 'nuevoId';
//Cambio el contenido de la etiqueta
//h1titulo.innerHTML = 'Este es mi nuevo titulo';
//Cambio una clase
//h1titulo.className = 'rojo';
let ulNuevo = document.createElement('ul');
ulNuevo.id = 'lista';
ulNuevo.className = 'rojo';
//<ul></ul>
for (let index = 0; index <= 2; index++) {
 let liNuevo = document.createElement('li');
 liNuevo.innerHTML = 'Elemento nro. ' + index;
 ulNuevo.appendChild(liNuevo);
 //En la primera vuelta
 //<ul>
 //<li>Elemento nro. 0</li>
 //</ul>
 //En la segunda vuelta
 //<ul>
 //<li>Elemento nro. 0</li>
 //<li>Elemento nro. 1</li>
 //</ul>
}
document.body.appendChild(ulNuevo);
// miInput.value = 'Hola';
miBoton.onclick = function() {
 console.log(miInput.value);
};
miInput.onblur = function() {
 console.log(miInput.value);
};