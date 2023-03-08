(() => {
  
    const hero: string = 'Flash'

    const returnName = (): string => {
        return hero
    }

    const activateBatSignal = (): string => {
      return 'Batise;al activada'
    }

    console.log(typeof activateBatSignal)

    const heroName = returnName()
    console.log(heroName)

})()