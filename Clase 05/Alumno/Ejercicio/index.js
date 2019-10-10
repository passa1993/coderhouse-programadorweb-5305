function Car(modelParam, brandParam, yearParam) {
    this.model=modelParam;
    this.brand=brandParam;
    this.year=yearParam;

    let id = Math.random ();

    this.getCarName = function() {
        return this.model + " " + this.brand + " " + this.year;
        
    }

    var año = new Date().getFullYear();

    this.calcularAntiguedad = function () {
        console.log('la antiguedad del modelo ' + modelParam + ' es ' + (año - this.year) + ' años');
    }
}


var car1 = new  Car('Suran', 'volkswagen', 2015)

var car2 = new  Car('Audi TT', 'Audi', 2017)

var car3 = new  Car('Gran Turismo', 'Maserati', 2018)

console.log(car1.getCarName());

console.log(car2.getCarName());

console.log(car3.getCarName());

car1.calcularAntiguedad();

car2.calcularAntiguedad();

car3.calcularAntiguedad();






