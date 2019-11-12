var counter = $("#counter");

$(document).keydown(handleKeyDown)

function handleKeyDown(event){
    var numeroActual = parseInt(counter.html());
    switch (event.which) {
        case 38: numeroActual ++
        ;
        break;
        case 13: numeroActual = 0
        ;
        break;
        case 40: numeroActual --
        ;
        break;
        }
    if(input)
    counter.html(numeroActual)
}
