import {setLocalList} from '../utils/localStorage';


function peopleController() {
    var table = $("#tableBody");
    let listaDePersonajes = [];

    console.log('Se cargo people');
  
  var request = $.ajax({
      url: "https://swapi.co/api/people",
      method: "GET"
  })
  
    request.done(function(data) {
        console.log(data)
        for (let index = 0; index < data.results.length; index++) {
            const personaje = data.results[index];
            table.append('<tr>' +
                        '<td>' + index + '</td>' +
                        '<td>' + personaje.name + '</td>' +
                        '<td>' + personaje.gender + '</td>' +
                        '<td>' + personaje.height + '</td>' +
                        '<td>' + personaje.mass + '</td>' +
                        '<td>' + personaje.eye_color + '</td>' +
                        '<td>' + '<button class="btn btn-success botonGuardar" type="button">Guardar</button>' + '</td>' +
                        '</tr>')
            }
        
            $(".botonGuardar").click(
                function() {
                    let fila = $(this).parent().parent();
                    let personaje = {
                        nombre: fila.children()[1].innerHTML,
                        genero: fila.children()[2].innerHTML,
                        altura: fila.children()[3].innerHTML,
                        peso: fila.children()[4].innerHTML,
                        ojos: fila.children()[5].innerHTML,
                    }
                    listaDePersonajes.push(personaje);
                    setLocalList('personajesGuardados', listaDePersonajes);
                    fila.fadeOut();
                }
            );

        })    
        request.fail(function(error) {
        console.log( 'Error: ' ,error);
    })


}

  export default peopleController;


