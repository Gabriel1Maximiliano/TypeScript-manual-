( () => {
    //¿ Cuál es el objetivo de una enumeración?
 // se usan cuando tenemos por ejemplo un conjunto discreto de elementos 
 // y sólo van a ser admitidos los que definamos como enum por ejemplo 
 // estaciones del año 'otoño' 'verano' 'primavera' 'invierno'
 // estado civil 'casado' 'soltero'
 // nivel de auidio 'alto' 'medio' 'bajo', estos valores tienen que tener un sentido 
 //semántico a la hora de definirlos


 // se upper camel case para nombrarlas
    enum AudioLevel {
        min,
        med,
        max
    }
    let currentAudio = AudioLevel.med
    console.log(currentAudio)
} )()
 // noten en el código de abajo que le asignó un valor a cada una de las propiedades de nuestro enum
/**
 *  let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["med"] = 1] = "med";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.med;
    console.log(currentAudio);
})();
 */