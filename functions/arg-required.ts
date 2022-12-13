( () => {
    const fullName = ( firstNAme:string, lastName:string ) => {// los argumentos son obligatorios 
        return `${ firstNAme } ${ lastName }`
    }
    const name = fullName('Tony', 'Stark');// si saco un argumento da error
    //debo respetar el tipo de dato también
    console.log({name})
} )()