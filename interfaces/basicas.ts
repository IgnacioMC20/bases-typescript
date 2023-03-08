(() => {
  interface Client {
    name: string;
    age?: number;
    adress?: Adress,
    getFullAdress?(id: string): string,
  }

  interface Adress {
    id: number;
    zip: string;
    city: string
  }

//   no es recomendable anidar en las interfaces, mejor crear otra interfaz

  const client: Client = {
    name: 'ign',
    age: 25,
    adress: {
        id: 45,
        zip: 'asdf',
        city: 'antigua'
    },
    getFullAdress: (fullAdress) => {
        return fullAdress
    }
  }

  const client2: Client = {
    name: 'ign2',
  }
})()