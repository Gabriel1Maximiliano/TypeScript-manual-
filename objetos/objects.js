"use strict";
(() => {
    let flash = {
        name: 'ana',
        age: 24,
        power: ['super']
    };
    flash = {
        name: 'ana',
        age: 24,
        power: ['super'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash);
})();
// aca si creamos un pbjeto flash y nos paramos sobre cada prpiedad podemos ver que ts infiere en el tipo de datos
//pero si qieremos agregar otra propiedad ts no nos deja 
