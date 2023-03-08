(() => {

    type Hero = {
        name: string, 
        age: number, 
        powers: string[], 
        getName?: () => string
    }

    
    let flash: Hero = {
      name: 'barry allen',
      age: 24,
      powers: ['velocidad', 'viajar tiempo'],
    }
    let superman: Hero = {
      name: 'Clark kent',
      age: 50,
      powers: ['velocidad', 'volar'],
      getName(){
          return this.name
      }
  
    }
  
  
  
  })()