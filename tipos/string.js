"use strict";
(function () {
    var _a;
    var bamtan = 'Batman';
    var linternaVerder = 'Linterna Verde';
    var volcanNegro = 'Heroe: Volcan Negro';
    console.log(bamtan);
    console.log(bamtan[10].toUpperCase()); // error
    console.log(((_a = bamtan[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay un caracter en esa posicion'); // undefined controlado
})();
