function compareStrings(valorAComparar,valorIngresado) {
    valorAComparar = valorAComparar.toString().toUpperCase();
    valorIngresado = valorIngresado.toString().toUpperCase();
    if (valorIngresado.indexOf (valorAComparar) === -1) return false;   

    return true
}

    console.log(compareStrings('PA', 'Pa'))