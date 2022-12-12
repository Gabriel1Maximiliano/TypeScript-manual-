( () => {
     function callHaposai():void{// aca agrego el tipo de return
        return// este return asi nos dice que  no regresa nada
    }
    const a = callHaposai();
    console.log(a);
    const arrow = ():void => {
        
    }
} )()

//si ponen el cursor sobre la función ven que retorna (local function) callHaposai(): void
// void le dice a ts que no hay valor de retorno