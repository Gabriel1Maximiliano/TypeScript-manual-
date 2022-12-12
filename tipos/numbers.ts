( () => {
    let avengers: number = 30;
    console.log(avengers);

    const vilians : number = 20;

    if( avengers < vilians ){
        console.log('Vamos a perder')
    }else{
        console.log('Vamos a ganar')
    }

    avengers = Number('55A'); // ojo acá esto de NaN y eso es un tipo number 1OjO 
    console.log(avengers);
} )()
// en el ejemplo de arriba vemos que ts nos advierte 'avengers' is possibly 'undefined'.
// pero en js funciona perfecto acá empezamos a ver cómo puede ts ayudar a depurar errores 
// en el navegador si no acomodamos los datos estp se ejecuta console.log('Vamos a perder')
//Pero si acomodamos los tipos console.log('Vamos a ganar')