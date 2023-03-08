(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'Martinez'}`
  }

  const name = fullName('tony', 'stark');
  console.log({name})
})()