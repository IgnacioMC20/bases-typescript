"use strict";
(function () {
    var arr = ['hola', 'pesas', 'gym', 'clases', 'programacion'];
    // console.log(arr)
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var palabra = arr_1[_i];
        // console.log(palabra)
        if (palabra.length < 5) {
            newArr.push(palabra);
        }
    }
    console.log('larga');
    console.log(newArr);
    console.log('---------');
    console.log('corta');
    var arr2 = arr.filter(function (palabra) { return palabra.length < 5; });
    console.log(arr2);
})();
// ! const arr = ['hola', 'pesas', 'gym', 'clases', 'programacion' ]
// ? esto con las funciones de array de shavascri ['hola', 'gym']
// ! const arr = ['hola', 'pesas', 'gym', 'clases', 'programacion' ]
// hint .map()
// ! const arr = ['pene', 'pesas', 'pene', 'clases', 'programacion' ]
