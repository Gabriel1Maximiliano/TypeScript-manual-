(()=>{
    
// TRATAR DE EVITARLO LO MAS POSIBLE (el dato any)
let avenger:any =123 ;

//const exists; // ojo este error 'const' declarations must be initialized las const deben ser inicializadas

let power;
avenger ='hulk'
console.log(avenger.charAt(0))
console.log((avenger as string).charAt(0))// aca hago casteo de datos (esto es de typescript)
 avenger =123.235658968 ;
 console.log((<number>avenger).toFixed(2))

})()