"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var FuerzaDC;
    (function (FuerzaDC) {
        FuerzaDC[FuerzaDC["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaDC[FuerzaDC["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaDC[FuerzaDC["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaDC[FuerzaDC["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaDC || (FuerzaDC = {}));
    var fuerzaFlash = FuerzaDC.fuerzaFlash;
    var fuerzaSuperman = FuerzaDC.fuerzaSuperman;
    var fuerzaBatman = FuerzaDC.fuerzaBatman;
    var fuerzaAcuaman = FuerzaDC.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
