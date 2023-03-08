(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones

  enum FuerzaDC {
    fuerzaAcuaman = 0,
    fuerzaBatman = 1,
    fuerzaFlash = 5,
    fuerzaSuperman = 100
  }
  const fuerzaFlash: FuerzaDC = FuerzaDC.fuerzaFlash;
  const fuerzaSuperman: FuerzaDC = FuerzaDC.fuerzaSuperman;
  const fuerzaBatman: FuerzaDC = FuerzaDC.fuerzaBatman;
  const fuerzaAcuaman: FuerzaDC = FuerzaDC.fuerzaAcuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: string = '100';
  const largoDelPoder: number = poder.length;
  console.log(largoDelPoder);


})()

