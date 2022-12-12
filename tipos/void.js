"use strict";
(() => {
    function callHaposai() {
        return; // este return asi nos dice que  no regresa nada
    }
    const a = callHaposai();
    console.log(a);
    const arrow = () => {
    };
})();
//si ponen el cursor sobre la función ven que retorna (local function) callHaposai(): void
// void le dice a ts que no hay valor de retorno
