$('body').append('<div class="container">' +
'<table class="table table-dark">' +
'<thead>' +
'<tr>'+
      '<th scope="col">#</th>' +
      '<th scope="col">Nombre</th>' +
      '<th scope="col">Género</th>' +
      '<th scope="col">Altura</th>' +
      '<th scope="col">Peso</th>' +
      '<th scope="col">Color de ojos</th>' +
      '<th scope="col"></th>' +
    '</tr>' +
  '</thead>' +
  '<tbody id="tableBody">' +
    '<tr id="1" style="overflow: hidden;">' +
      '<td>1</td>' +
      '<td>Luke Skywalker</td>' +
      '<td>Hombre</td>' +
      '<td>172 cm</td>' +
      '<td>77 kg</td>' +
      '<td>Azul</td>' +
      '<td id="boton" style="padding:0"><button type="button" class="btn btn-danger">Eliminar</button></td>' +
    '</tr>' +
  '</tbody>' +
'</table>' +
'</div>')

var table = $("#1");
var boton = $("#boton");

boton.click(function() {
 table.fadeOut( "slow", function() {
  });
});
