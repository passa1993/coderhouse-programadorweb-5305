function contactController() {

var nombre = document.getElementById ('firstName');
var email = document.getElementById('email');
var boton = document.getElementById('submitButton')
var comments = document.getElementById('comments')

nombre.onblur = validarNombre;
email.onblur = validarEmail;
comments.onblur = validarComments;


function habilitarBoton() {
    
    if (nombre.className === 'form-control is-valid' && email.className === 'form-control is-valid' && comments.className === 'form-control is-valid')
    {
        boton.disabled = false;
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
    event.target.className = 'form-control is-valid';
    }
    habilitarBoton()
}

function validarComments(event) {
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

}


export default contactController;
 