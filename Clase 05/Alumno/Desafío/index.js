function Student(firstNameParam, lastNameParam, dniParam, emailParam) {
    this.firstname=firstNameParam;
    this.lastname=lastNameParam;
    this.dni=dniParam;
    this.email=emailParam;

    let id = Math.random ();

    this.getId = function() {
        return id;
    }

    this.getFullName = function() {
        if (this.firstname === undefined || this.lastname === undefined) {
            return 'El nombre y apellido ingresado es incorrecto'
        }
        return this.firstname + " " + this.lastname;
        
    }

    if (parseInt (this.dni) > 10000000) {
        console.log("el DNI ingresado es valido")
    } else {console.log('el DNI es invalido')}
}

var student1 = new  Student("Juan", "Perez", "45678987", "juan@gmail.com")

var student2 = new  Student('Ana', 'Fernandez', "45678989", "ana@gmail.com" )

var student3 = new  Student('Pablo', 'Mármol', "45678956", "pedro@gmail.com")

console.log(student1.getFullName());

console.log(student2.getFullName());

console.log(student3.getFullName());

console.log(student1.getId());

console.log(student2.getId());

console.log(student3.getId());