( ()=>{

let isRanma: boolean = true; 
// let isRanma: boolean = true; //(descomentar y ver las diff)
console.log(isRanma) 

// si concologueamos el valor de isRanma sin asignarle valor ts nos da error Variable 'isRanma' is used before being assigned.
// si hacemos esto let isRanma: boolean = true; el erro desaparece
// teneer en cuenta que esto en js no da error ya el valor de isRanma es undefined, que ts nos dé error o no 
// depende de las reglas que pongamos en nuestro tsconfig

// 

})()// con esta funcion ts entiende que son archivos separados