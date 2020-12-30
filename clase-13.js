//  Estructuras repetitivas: for 

var ginna = {
  nombre: 'Ginna',
  apeliido: 'Mora',
  edad: 18,
  peso: 50
}

console.log(`Al inicio del año ${ginna.nombre} pesa ${ginna.peso}kg`)

// function aumentarDePeso(persona) {
  // return persona.peso += 200
// } es lo mismo que abajo  
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(ginna)
  } else if (random < 0.5) {
    adelgazar(ginna)
  }
}

console.log(`Al final del año ${ginna.nombre} pesa ${ginna.peso.toFixed(1)}kg`)