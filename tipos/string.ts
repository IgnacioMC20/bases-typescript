(() => {
  const bamtan: string = 'Batman';
  const linternaVerder: string = 'Linterna Verde';
  const volcanNegro: string = 'Heroe: Volcan Negro'

  console.log(bamtan)

  console.log(bamtan[10].toUpperCase()) // error
  console.log(bamtan[10]?.toUpperCase() || 'No hay un caracter en esa posicion') // undefined controlado

})()