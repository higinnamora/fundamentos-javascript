// exercise

var ginna = {
  nombre: 'Ginna',
  edad: 18
}

var marcela = {
  nombre: 'Marcela',
  edad:15
}



function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
      console.log(`${persona.nombre} es mayor de edad`)
  } else (persona.edad < 18) {
      console.log(`${persona.nombre} es menor de edad`)
  }
  }
