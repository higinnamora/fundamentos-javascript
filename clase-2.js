
// Variables : Strings //

var nombre = 'Ginna', apellido = 'Mora'

var nombreEnMayusculas = nombre.toUpperCase() // letras en mayusculas //
var apellidoEnMinusculas = apellido.toLowerCase() // letras en minusculas //

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // igual que usar + pero dentro de las llaves se puede poner codigo js //

var str = nombre.substr(3, 5) // Muestra el nombre desde donde se le indico//