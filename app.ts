

//const msg:string ='hola mundo' // el mensaje de error aca es porque tanto en app.ts como en app.js el sistema piensa que van a colisionar los nombre en el navegador
//console.log(msg) 


/**si dejamos el cursor sobre "msg vemos que nos muestra" const msg: "hola mundo" esos dos puntos me dicen que 
 * la variable sólo va a poder recibir un string como valor.
 */

/**ahora hagamos un console.log( msg )  y vemos en el navegador este mensaje "Refused to execute script from 'http://127.0.0.1:5500/app.ts' because its MIME type ('video/mp2t') is not executable."
 * eso es porque el navegador no entiende esta sintáxis "const msg:string ='hola mundo'" pero si le sacamos el tipado de ts y levantamos de nuevo el servicio 
 * vemos  nuestro console,.log('Hola mundo') en la patalla del navegador.
 * 
 * Si queremos que corra agarramos y le decimos -hey js ya terminé de hacer mi código en ts generame la versión de Js. 
 * ¿cómo hacemos eso? Abrimos la terminal integrada de Vsc o su propia terminal tenemos que estar la carpeta raiz del proyecto en este caso BASES escribamos 
 * el comnado 'tsc app', esto le da la orden de compilar este archivo. Si miran a su izquierda en el editor aparece 'app.js'
 * Ahora fíjense lo que tenemos. 
 *       {CODIGO EN JS }                                        {CODIGO EN TS }
 *                                                            const msg:string ='hola mundo'
       var msg = 'hola mundo';
console.log(msg);                                                        console.log(msg)
 * cambien para ver en el navegador por este tag <script src="./app.js" ></script>
 */

/**----------------------------------leccón dos----------------------------------------- */

//const a= 10; // si ponemos el cursor encima nos dice el const a: 10
// ahora hagamos 

//let b = 10; // nos dice let b: number esto es poque arriba tenememos una constante y por lo tanto no va a cambiar
//en cambio let sí se  pude cambiar. Poe eso TS infiere que es del tipo number 

//function sayHello (msg:string){// si le asignamos un tipo el error se va
//  console.log(msg+' '+'gab')
//}
// Parameter 'msg' implicitly has an 'any' ese error es porque en nuestro tsconfig
// tenemos habilitado esto "noImplicitAny": true,     ponelo en false si queres saca éste error 
// lo recomndable es usarlo y hacer lo más estricto a ts para minimizar errores

(()=>{
    const a:number= 10;
    console.log(a);
})()