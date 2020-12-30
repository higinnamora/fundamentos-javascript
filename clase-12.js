// Arrow functions

var ginna = {
  nombre: 'Ginna',
  edad: 18
}

var marcela = {
  nombre: 'Marcela',
  edad:15
}

const MAYORIA_DE_EDAD = 18
// es lo mismo que la anterior clase 
//const esMayorDeEdad = function (persona) {
  //return persona.edad >= MAYORIA_DE_EDAD
//} 
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD // para ahorrar mas en arrow function se puede quitar los parentesis cuando hay un sooo parametro
    // Si solo se va a usar return es posible quitarlo y las llaves


function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Acceso aceptado')
// Aquí preguntamos: es cierto (true) que no es mayor de edad ?
// o: es diferente a mayor de edad ? (por lo que es menor de edad)

// Si es así, quiere decir que es menor de edad (porque estamos preguntando por una negación), entraría al if, y haría la acción que viene despues del ?
// Y el else sería lo que haría si no entrara al if ( si es mayor de edad ), haría la acción despues de los :