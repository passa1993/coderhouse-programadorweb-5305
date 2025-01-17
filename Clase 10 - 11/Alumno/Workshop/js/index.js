var listaAlumnos = [];

var dni = document.getElementById ('dniInput');
var nombre = document.getElementById ('nombreInput');
var apellido = document.getElementById('apellidoInput');
var email = document.getElementById('email');
var botonAgregar = document.getElementById('addStudentButton');

var dniAEliminar = document.getElementById('deleteDni')
var botonEliminar = document.getElementById('deleteStudentButton')

var tablaDeNombres = document.getElementById('bodyTable')

dni.onblur = validarDNI;
nombre.onblur = validarNombre;
apellido.onblur = validarApellido;
email.onblur = validarEmail;
botonAgregar.onclick = clickearBoton
botonEliminar.onclick = borrarAlumno

bajarLocalStorage()


function habilitarBoton() {
    if (dni.className === 'form-control is-valid' && nombre.className === 'form-control is-valid' & apellido.className === 'form-control is-valid' & email.className === 'form-control is-valid')
    {
        botonAgregar.disabled = false;
        return true
    } else {
        true;
        return false;
    }
}


function validarNombre(event) {
    var value = event.target.value;
    if (value.length === 0) {
        event.target.className = 'form-control is-invalid';

   } else {
       event.target.className = 'form-control is-valid'
    }
    habilitarBoton()
}

function validarApellido(event) {
    var value = event.target.value;
    if (value.length === 0) {
        event.target.className = 'form-control is-invalid';
   } else {
       event.target.className = 'form-control is-valid';
    }
    habilitarBoton()
}

function validarEmail(event) {
    var value = event.target.value;
    if (value.length === 0 || value.indexOf('@') === -1 || value.indexOf('.') === -1 || value.length < 5) {
        event.target.className = 'form-control is-invalid';
   } else {
       event.target.className = 'form-control is-valid';
    }
    habilitarBoton()
}

function validarDNI(event) {
    var value = parseInt(event.target.value);
    if (Number.isNaN(value) || value === 0 || existeDniEnListaAlumnos(value)) {
        event.target.removeClass = 'form-control is-valid';
        event.target.className = 'form-control is-invalid';
/* VER PORQUE NO SE VA LA CLASE ANTERIOR*/
   } else {
        event.target.removeClass = 'form-control is-invalid';
        event.target.className = 'form-control is-valid';
   }
   habilitarBoton()
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

/*agregar click*/

function clickearBoton() {
    if(habilitarBoton(true)) {
        let nuevoAlumno = {
            nombre: nombre.value,
            apellido: apellido.value,
            dni: dni.value,
            email: email.value,
        }
        if (existeDniEnListaAlumnos(nuevoAlumno.dni) == false) {

            listaAlumnos.push(nuevoAlumno)

            let tr = document.createElement('tr');

            tr.id = dni.value;

            let tdNombre = document.createElement('td');
            tdNombre.innerHTML = nombre.value;
            tr.appendChild (tdNombre);

            let tdApellido = document.createElement('td');
            tdApellido.innerHTML = apellido.value;
            tr.appendChild (tdApellido);

            let tdDNI = document.createElement('td');
            tdDNI.innerHTML = dni.value;
            tr.appendChild (tdDNI);

            let tdEmail = document.createElement('td');
            tdEmail.innerHTML = email.value;
            tr.appendChild (tdEmail);

            tablaDeNombres.appendChild(tr);

            actualizarLocalStorage()
        }
    }
}

function borrarAlumno() {

  listaAlumnos = listaAlumnos.filter(function(elem) {
    return elem.dni != dniAEliminar.value
  })

  
  armarTablaDeAlumnos()

  actualizarLocalStorage()
}

function armarTablaDeAlumnos() {
  
    tablaDeNombres.innerHTML = ''

    for (let i = 0; i < listaAlumnos.length; i++) {
        const alumno = listaAlumnos[i];

        let tr = document.createElement('tr');
        tr.id = alumno.dni;

        let tdNombre = document.createElement('td');
        tdNombre.innerHTML = alumno.nombre;
        tr.appendChild(tdNombre);

        let tdApellido = document.createElement('td');
        tdApellido.innerHTML = alumno.apellido;
        tr.appendChild(tdApellido);

        let tdDNI = document.createElement('td');
        tdDNI.innerHTML = alumno.dni;
        tr.appendChild(tdDNI);

        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = alumno.email;
        tr.appendChild(tdEmail);

        tablaDeNombres.appendChild(tr);
    }
}


function actualizarLocalStorage() {
  var stringifyListaAlumnos = JSON.stringify(listaAlumnos);
  localStorage.setItem('listaAlumnos', stringifyListaAlumnos);
}

function bajarLocalStorage() {
    alumnoLocalStorage = localStorage.getItem('listaAlumnos');
    parseAlumnoLocalStorage = JSON.parse(alumnoLocalStorage);
    console.log(parseAlumnoLocalStorage)
    if (alumnoLocalStorage !== null) {
        listaAlumnos = parseAlumnoLocalStorage
        armarTablaDeAlumnos()
    }
}
