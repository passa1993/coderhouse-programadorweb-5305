var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS'];


function setLocalList(key, list) {
    if (typeof key === 'string' && Array.isArray(list)) {
    var stringifyTestList = JSON.stringify(list);
    localStorage.setItem(key, stringifyTestList);

    }
}

setLocalList('studentsList', testList);


function getLocalList(key) {
    if (typeof key === 'string') {
        var elemento = localStorage.getItem(key);
        console.log(JSON.parse(elemento));
    }

}

getLocalList('studentsList')