// Desestructurar objetos

var ginna = {
  nombre: 'Ginna',
  apellido: 'Mora',
  edad: 18
}

var marcela = {
  nombre: 'Marcela',
  apellido: 'Diaz',
  edad: 20
}

function imprimirNombreEnMayusculas(persona) {
 //  var nombre = persona.nombre  es lo mismo de abajo pero simplificado 
 var { nombre } = persona 
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(ginna)
imprimirNombreEnMayusculas(marcela)
// imprimirNombreEnMayusculas({nombre:'Pepito'})
// imprimirNombreEnMayusculas({apellido: 'Gomez'}) 