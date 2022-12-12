/**si dejamos el cursor sobre "msg vemos que nos muestra" const msg: "hola mundo" esos dos puntos me dicen que
 * la variable sólo va a poder recibir un string como valor.
 */
var msg = 'hola mundo';
console.log(msg);
/**ahora hagamos un console.log( msg )  y vemos en el navegador este mensaje "Refused to execute script from 'http://127.0.0.1:5500/app.ts' because its MIME type ('video/mp2t') is not executable."
 * eso es porque el navegador no entiende esta sintáxis "const msg:string ='hola mundo'" pero si le sacamos el tipado de ts y levantamos de nuevo el servicio
 * vemos  nuestro console,.log('Hola mundo') en la patalla del navegador.
 *
 * Si queremos que corra agarramos y le decimos -hey js ya terminé de hacer mi código en ts generame la versión de Js.
 * ¿cómo hacemos eso? Abrimos la terminal integrada de Vsc o su propia terminal tenemos que estar la carpeta raiz del proyecto en este caso BASES escribamos
 * el comnado 'tsc app', esto le da la orden de compilar este archivo. Si miran a su izquierda en el editor aparece 'app.js'
 * Ahora fíjense lo que tenemos.
 * {CODIGO EN TS }
 *
 * {CODIGO EN JS }
 */ 
