// Objetos

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

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(ginna)
imprimirNombreEnMayusculas(marcela)
imprimirNombreEnMayusculas({nombre:'Pepito'})
imprimirNombreEnMayusculas({apellido: 'Gomez'}) // error ya que se le da un parametro diferente

