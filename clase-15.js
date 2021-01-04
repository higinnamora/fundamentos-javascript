var contador = 0;

var llueve = () => Math.random()> 0.25;

do {
  contador++;
} while(!llueve());

var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);

// Declaras la variable “frecuencia” como una condición
//en la que la parte antes del signo de interrogación es la condición
// y la parte que vas después del signo son los valores
// que va a tomar la variable luego de ver si se cumple o no la función