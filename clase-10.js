// Condicionales 

var ginna = {
  nombre: 'Ginna',
  apellido: 'Mora',
  edad: 18,
  ingeniero: true,
  cocinero: false,
  voleibolista: true,
  guitarrista: false
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }
  
  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.voleibolista) {
    console.log('Voleibolista')
  }

  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
}

imprimirProfesiones(ginna)
