"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFUnction;
    // si quiero poner que el tipo de dato que la variable myFUnction debe recibir 
    // hacemos myFUnction: Function
    // si qweremos que cumpla con la firma de greet myFUnction: (name:string)=>string
    //  si queremos que cumpla con la firma de addNumber myFUnction: (a:number,b:number)=> number
    myFUnction = 10;
})();
