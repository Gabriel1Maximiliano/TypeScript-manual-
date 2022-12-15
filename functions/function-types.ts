
( () => {
   
    const addNumber = (a:number,b:number): number=> a+b
    const greet = (name:string): string=> `Hola ${name}`
    const saveTheWorld = (): string=> `El mundo está salvado`
  let myFUnction;

  // si quiero poner que el tipo de dato que la variable myFUnction debe recibir 
  // hacemos myFUnction: Function
  // si qweremos que cumpla con la firma de greet myFUnction: (name:string)=>string
  //  si queremos que cumpla con la firma de addNumber myFUnction: (a:number,b:number)=> number
  myFUnction = 10;

} )()