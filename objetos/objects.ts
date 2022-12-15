( () => {
    // asignamos el tipo de dato que va a tener caca propiedad del objeto
    // aca noi importa el orden en que esten las propiedades lo recomndable es alfababéticamente
    // podemos poner una propiedad opcional con '?' age?:number
    let flash :{ name:string,age?:number,power:string[]  }={
        name:'ana',
       // age:24,
        power:['super']
    }
    //  flash ={
    //     name:'ana',
    //     age:24,
    //     power:['super'],
    //     getNombre(){
    //         return this.name;
    //     }
    // }
    console.log(flash)
} 

)()
// aca si creamos un pbjeto flash y nos paramos sobre cada prpiedad podemos ver que ts infiere en el tipo de datos
//pero si qieremos agregar otra propiedad ts no nos deja 