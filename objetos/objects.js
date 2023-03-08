"use strict";
(function () {
    var flash = {
        name: 'barry allen',
        age: 24,
        powers: ['velocidad', 'viajar tiempo'],
    };
    flash = {
        name: 'Clark kent',
        age: 50,
        powers: ['velocidad', 'volar'],
        getName: function () {
            return this.name;
        }
    };
})();
