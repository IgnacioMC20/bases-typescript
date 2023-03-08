(() => {
  let avenger: any

  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0));

  avenger = 55.234234;
console.log((avenger as number).toFixed(2))
console.log(<number>avenger.toFixed(4))

})()