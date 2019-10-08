var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

let i = 0;
do {
    let dia = daysOfTheWeek[i];

    if (dia === "Lunes" dia === 'Martes' && dia === 'Miércoles' && dia === 'Miercoles' && dia === 'Jueves' && dia === 'Viernes') {
        console.log(dia + " es un dia habil")
    }

    if (dia === "Sábado" && dia === 'Sabado' && dia === 'Domingo') {
        console.log(dia + " es un dia inhabil")
    }

    if (dia === "Pato") {
        console.log(dia + " es un dia inexistente")
    }

    i++;
} while (i < daysOfTheWeek.length);