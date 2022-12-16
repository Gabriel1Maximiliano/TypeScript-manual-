(() => {
    type Hero = {// hacemos nuetra plantilla de objeto esto nos permite hacer cambios o agregar props mas eficientemente
        name:string;
        age?:number,
        power:string[],
        getName?: () => string;
       }

       let valor :( string | number | Hero );
       valor = 20 
       console.log(typeof valor) // imprime tipo number
       valor ='Lola'
       console.log(typeof valor) // imprime tipo string
       valor = {
        name:'Lola',
        age:24,
        power:['brío']
       }
       console.log(typeof valor) // imprime tipo object 
       //porque no puede inferir que es de tipo Hero 
       //ya que ese dato no existe en JS
})()