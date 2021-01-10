// Condicional multiple: switch

var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
  case 'acuario':
    console.log('Evite hacer las cosas de forma apurada. Entienda que la prisa y la desesperación no le aseguran nada. Tranquilícese y actúe con mucho cuidado.')
   break
  case 'piscis': 
    console.log('Haga uso de la vitalidad al máximo, ya que le espera un día lleno de movimientos y sorpresas. Trate de sobrellevarlos de la mejor manera y verá los resultados.')
   break
  case 'cancer':
  case 'cáncer':
    console.log('Coordine mejor sus actividades para poder llegar a cumplir con todas las obligaciones en tiempo y forma como usted quiere. Con solo organizarse lo logrará.')
    break
  case 'tauro':
    console.log('Evite acelerar el curso de las cosas, ya que se encontrará con diferentes obstáculos. Todo lleva su tiempo y hoy la Luna le exige un ritmo pausado.')
    break
  case 'aries':
    console.log('Seguramente necesite reflexionar sobre los inconvenientes que vivió días atrás. Podrá lograr reconocer algunas dudas que le impiden que las soluciones salgan a la luz.')
    break
  case 'geminis':
  case 'géminis':
    console.log('Confecciónese un balance completo y detallado de la marcha de sus proyectos. Será muy positivo para las decisiones que deba tomar en su futuro.')
    break
  case 'leo':
    console.log('Mantenga la paciencia para afrontar la jornada con tranquilidad. No espere que los asuntos que tiene entre manos se solucionen con rapidez y sin esfuerzo.')
    break
  case 'virgo':
    console.log('Cuando comience a dejarse sorprender por lo inesperado le irá mucho mejor. No busque explicaciones para todas las cosas, aprenda a disfrutar del momento.')
    break
  case 'libra':
    console.log('Aproveche, ya que sus pensamientos estarán ágiles. De esta forma, podrá expresar con claridad sus ideas y llamará la atención de los demás.')
    break
  case 'escorpio':
    console.log('Prepárese, ya que se le presentará la oportunidad para hacer cambios extremadamente profundos en su vida personal y social. Evite limitarse por miedo.')
    break
  case 'sagitario':
    console.log('Déjese ayudar por la gente que lo quiere. Acepte los consejos y recapacite sobre sus propios errores, ya que su agresividad se apoderará de usted.')
    break
  case 'capricornio':
    console.log('Esté preparado, ya que transitará una jornada llena de contradicciones en todo lo que realice y podría sentirse desorientado. Si surge algún problema, no desespere.')
    break
  default:
    console.log('No es un signo zodiacal válido')
    break
}

if (signo === 'acuario') {
  console.log('Evite hacer las cosas de forma apurada. Entienda que la prisa y la desesperación no le aseguran nada. Tranquilícese y actúe con mucho cuidado.')
}