$('body').append('<div class="container">' +
'<table class="table table-dark">' +
'<thead>' +
'<tr>'+ '<th scope="col">Nombre</th>' + '<th scope="col">Altura y Peso</th>' +
      '<th scope="col">Sexo</th>' + '<th scope="col">Peliculas</th>' + '</tr>' +
  '</thead>' +
  '<tbody id="tableBody">' +
    
  '</tbody>' +
'</table>' +
'</div>')

  var request = $.ajax({
      url: "https://swapi.co/api/people",
      method: "GET"
  })
  
  request.done(function(data) {
      console.log(data)
      for (let index = 0; index < data.results.length; index++) {
        const personaje = data.results[index];
      }
    })

    

  request.fail(function(error) {
      console.log( 'Error: ' ,error);
  })
*/

// '<tr id="" style="overflow: hidden;">' +
//           '<td>' +data.name +'</td>' +
//           '<td>' +data.height + ' cm y'+ data.mass + ' kg.' + '</td>' +
//           '<td>' +data.gender +'</td>' +
//          '<td>'  + 

//         '</td>' +
//         '</tr>' +