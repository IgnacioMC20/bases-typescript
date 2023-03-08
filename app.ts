
(() => {

    const arr: string[] = ['hola', 'pesas', 'gym', 'clases', 'programacion'];
    // console.log(arr)
    let newArr: string[] = [];

    for (const palabra of arr) {
        // console.log(palabra)
        if (palabra.length < 5) {
            newArr.push(palabra)
        }
    }
    
    console.log('larga')
    console.log(newArr);
    
    console.log('---------')
    console.log('corta')

    const arr2 = arr.filter(palabra => palabra.length < 5);
    console.log(arr2)


})()

// ! const arr = ['hola', 'pesas', 'gym', 'clases', 'programacion' ]
// ? esto con las funciones de array de shavascri ['hola', 'gym']



// ! const arr = ['hola', 'pesas', 'gym', 'clases', 'programacion' ]

// hint .map()
// ! const arr = ['pene', 'pesas', 'pene', 'clases', 'programacion' ]
