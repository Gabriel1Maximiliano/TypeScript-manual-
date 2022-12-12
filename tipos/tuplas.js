"use strict";
/** Tupla : Conjunto de elementos de distinto tipo que se guardan de forma consecutiva en memoria.
 * datos de la documentación que me gustaron
 * Tuples may be destructured like arrays; the destructuring variables get the types of the corresponding tuple elements:

let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean
It’s an error to destructure a tuple beyond the range of its elements:

let [a, b, c, d] = tuple; // Error, no element at index 3
As with arrays, you can destructure the rest of the tuple with ..., to get a shorter tuple:

let [a, ...bc] = tuple; // bc: [string, boolean]
let [a, b, c, ...d] = tuple; // d: [], the empty tuple
 */
(() => {
    const heroe = ['Dr strange', 100]; //asi defino  un array
    const heroeTupla = ['Dr strange', 100]; //asi defino  un tupla
    // le digo que su primera posicion va a ser un stirn y la segunda un number
    // ¿ Cuál es la ventaja de esto?
    //heroeTupla[0] =10 // me marca error ya que el tipo de dato de la primera posici+on es string
})();
