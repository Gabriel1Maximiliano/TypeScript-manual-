( () => {
   type Hero = {// hacemos nuetra plantilla de objeto esto nos permite hacer cambios o agregar props mas eficientemente
    name:string;
    age?:number,
    power:string[],
    getName: () => string;
   }
    let flash : Hero ={
        name:'ana',
        age:24,
        power:['super'],
        getName(){
                     return this.name;
                 }
    }
    //  flash ={
    //     name:'ana',
    //     age:24,
    //     power:['super'],
    //     getName(){
    //         return this.name;
    //     }
    // }
    console.log(flash)
} 

)()