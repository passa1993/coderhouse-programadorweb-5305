var listaAlumnos= [];

var dni = document.getElementById ('dniInput');
var nombre = document.getElementById ('nombreInput');
var apellido = document.getElementById('apellidoInput')

dni.onblur = validarDNI;
nombre.onblur = validarNombre;
apellido.onblur = validarNombre;


function validarNombre(event) {
    var value = event.target.value;
    if (value.length === 0) {
        event.target.className = 'form-control is-invalid';
   } else {
       event.target.className = 'form-control is-valid';
    }
}

function validarDNI(event) {
    var value = parseInt(event.target.value);
    if (Number.isNaN(value) || value === 0 || existeDniEnListaAlumnos(value)) {
        event.target.className = 'form-control is-invalid';
   } else {
       event.target.className = 'form-control is-valid';
   }
}

function existeDniEnListaAlumnos(dniParam) {
    if (listaAlumnos.length === 0) return false;

    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        if (alumno.dni === dniParam.toString()) {
            return true;
        }
    }
    return false;
}


