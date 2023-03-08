(() => {

  let flash: {name: string, age: number, powers: string[], getName?: () => string} = {
    name: 'barry allen',
    age: 24,
    powers: ['velocidad', 'viajar tiempo'],
  }

  flash = {
    name: 'Clark kent',
    age: 50,
    powers: ['velocidad', 'volar'],
    getName(){
        return this.name
    }

  }



})()