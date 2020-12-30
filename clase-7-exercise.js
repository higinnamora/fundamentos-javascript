var Sacha = {
  nombre: 'Sacha',
  edad: 28
}
  
var Dario = {
  nombre: 'Dario',
  edad: 27
}
  
function imprimirNombreYEdad(persona) {
  var { nombre, edad } = persona
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}
  
imprimirNombreYEdad(Sacha)
imprimirNombreYEdad(Dario)