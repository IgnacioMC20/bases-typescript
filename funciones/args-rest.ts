(() => {
    const fullName = (firstName: string, ...restArgs: string[]): string => {
      return `${firstName} ${restArgs.join(' ') || 'Martinez'}`
    }
  
    const name = fullName('tony', 'stark', 'kent', 'lol');
    console.log({name})
  })()