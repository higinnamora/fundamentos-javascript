// Parametros como referencia o como valor 

var Sacha = {
  nombre: 'Sacha',
  edad: 28
}
  
var Dario = {
  nombre: 'Dario',
  edad: 27
}

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad += 1 
  }
}
// A los tres puntos “…” se llama operador de propagación (Spread operator), es una nueva implementación en ES6. Básicamente lo que hace es crear un duplicado de nuestro objeto para luego modificarlo según lo que necesitemos.