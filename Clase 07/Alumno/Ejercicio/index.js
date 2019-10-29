var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS'];


function setLocalList(key, list) {
    if (typeof key === 'string' && Array.isArray(list)) {
    var stringifyTestList = JSON.stringify(list);
    localStorage.setItem('key', stringifyTestList);
}

setLocalList('studentsList', testList);