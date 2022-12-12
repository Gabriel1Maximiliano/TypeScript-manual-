( () => {
    const batman:string= 'Bataman';
    const linternaVerd:string = 'Linterna´s Verde';
    const VolcánNegro:string = `Héroe: Volcán Negro`;
    // el tipado agrgado me da acceso a los métodos cosa que si 
    //lo declaro como any no sucede
    console.log( `I´m ${batman}`)
 // en este queremos acceder al onceavo caracter de batman pero este sabmos que 
 //no existe pero ts no da error 
    //console.log(batman[10].toLocaleUpperCase())
    // esto soluciona el error
    console.log(batman[10]?.toLocaleUpperCase()|| 'No esta presente')
} )()