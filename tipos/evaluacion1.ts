(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman :string= 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:(string) [] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum Power  {
      acuaman=0,
      batman=1,
      superman=100,
      flash=5

    }
  
 
    const fuerzaFlash:    Power = Power.flash ;
    const fuerzaSuperman: Power = Power.superman;
    const fuerzaBatman:   Power = Power.batman;
    const fuerzaAcuaman:  Power = Power.acuaman ;

  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
    //const a = (expr as any) as T;
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length ;
    console.log( largoDelPoder );
  
  
  })()
  
  