"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Power;
    (function (Power) {
        Power[Power["acuaman"] = 0] = "acuaman";
        Power[Power["batman"] = 1] = "batman";
        Power[Power["superman"] = 100] = "superman";
        Power[Power["flash"] = 5] = "flash";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.flash;
    const fuerzaSuperman = Power.superman;
    const fuerzaBatman = Power.batman;
    const fuerzaAcuaman = Power.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    //const a = (expr as any) as T;
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
