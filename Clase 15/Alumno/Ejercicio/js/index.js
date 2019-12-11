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

