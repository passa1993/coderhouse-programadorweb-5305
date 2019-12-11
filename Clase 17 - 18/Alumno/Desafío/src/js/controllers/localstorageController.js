import {getLocalList, setLocalList} from '../utils/localStorage';

function localstorageController() {
    console.log('Se cargo el local storage');
    let personajesGuardados = getLocalList('personajesGuardados');
    var table = $("#tableBody");
      for (let index = 0; index < personajesGuardados.length; index++) {
        const personaje = personajesGuardados[index];
        table.append('<tr>' +
                    '<td>' + '</td>' +
                    '<td>' + personaje.nombre + '</td>' +
                    '<td>' + personaje.genero + '</td>' +
                    '<td>' + personaje.altura + '</td>' +
                    '<td>' + personaje.peso + '</td>' +
                    '<td>' + personaje.ojos + '</td>' +
                    '<td>' + '<button class="btn btn-danger botonBorrar" type="button">Borrar</button>' + '</td>' +
                    '</tr>')
        }

        $(".botonBorrar").click(
          function () {
          let fila = $(this).parent().parent();
          let nombre = fila.children()[1].innerHTML;
          let position;
          for (let index = 0; index < personajesGuardados.length; index++) {

            const personaje = personajesGuardados[index];
            if (personaje.nombre === nombre) {
             position = index;
            }
          }
          personajesGuardados.splice(position,1)

          setLocalList ('personajesGuardados', personajesGuardados);

          fila.fadeOut();
          }
          
  )
}

export default localstorageController;
  