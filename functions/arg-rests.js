"use strict";
(() => {
    // acá quiero que solo el primer nombre sea obligatorio las demas son opcionales y puede recibir cualquier cantidad
    // definimos restArgs como array de strings y le aplicamos el método join
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join('')}`;
    };
    const superman = fullName('Pepe', 'Julio', 'Alonso');
    console.log({ superman });
})();
