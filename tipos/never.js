"use strict";
// el never significa que mi función no debe terminar exitosamente
// esto significa que una vez llamada la función su código no va a seguir 
(() => {
    const shampoo = () => {
        throw new Error('Shampoo no está');
    };
})();
