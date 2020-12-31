// Estructuras repetitivas: while

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
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3 

var dias = 0

while (sacha.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(ginna)
  }
  if (realizaDeporte()) {
    adelgazar(ginna)
  }
  dias += 1
}


console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg`)