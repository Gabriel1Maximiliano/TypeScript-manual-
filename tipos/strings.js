"use strict";
(() => {
    var _a;
    const batman = 'Bataman';
    const linternaVerd = 'Linterna´s Verde';
    const VolcánNegro = `Héroe: Volcán Negro`;
    // el tipado agrgado me da acceso a los métodos cosa que si 
    //lo declaro como any no sucede
    console.log(`I´m ${batman}`);
    // en este queremos acceder al onceavo caracter de batman pero este sabmos que 
    //no existe pero ts no da error 
    //console.log(batman[10].toLocaleUpperCase())
    // esto soluciona el error
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No esta presente');
})();
