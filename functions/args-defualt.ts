



( () => {
    const fullName = ( firstNAme:string, lastName?:string, upper:boolean=false ) => {// aca agrgamos un valor por defecto si no lo mnadamos toma el valor de false
        // el símbolo de interrogación le dice a ts puede o no venir

        if( upper ){
            return `${ firstNAme } ${ lastName || '----' }`.toLocaleUpperCase();
        }else{
            return `${ firstNAme } ${ lastName || '----' }`;
        }
    }
    const name = fullName('Tony', 'Stark');
    
    console.log({name})
} )()