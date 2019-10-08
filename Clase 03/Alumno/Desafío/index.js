let operacion = prompt('Ingrese si la operacion es sum o div');
let primerNumero = parseInt(prompt('Ingrese el primer numero'));
let segundoNumero = parseInt(prompt('Ingrese el segundo numero'));


if (operacion === 'sum' ) {
    console.log('la suma es ' + (primerNumero + segundoNumero))
};

if (operacion === 'div' ) {
    if (segundoNumero === 0) {
        do {
            segundoNumero = parseInt(prompt('Ingrese el segundo numero de vuelta'));
            console.log (segundoNumero)
        } while (segundoNumero === 0);
    }
    console.log('la division es ' + (primerNumero / segundoNumero))
};
