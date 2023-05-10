"use strict";
/*Escribir un algoritmo q nos pida una clave y verifique que sea correcta.
Tenga en cuenta que la clave correcta es la palabra "eureka".
Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos, el sistema mostrara
un mensaje indicandonos que hemos agotados todas las oportunidades.
Si acertamos la clave saldremos directamente del programa
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var claveCorrecta = "eureka";
var clave = rls.question("Ingrese la clave para acceder al sistema: ");
var intentos = 0;
console.log("Ingrese: ", clave); //Muestro por pantalla la clave ingresada.
intentos = intentos + 1; //Solo tenemos 3 intentos.
while (clave !== claveCorrecta && intentos < 3) {
    //Veifico la clave ingresada y el numero de intentos.
    console.log("Clave incorrecta, reintente");
    clave = rls.question("Ingrese la clave para acceder al sistema: ");
    intentos = intentos + 1;
}
if (clave === claveCorrecta) {
    //Si la clave es correcta finaliza el programa.
    console.log("Clave correcta, ha ingresado al sistema");
}
else
    console.log("muestre intento nro: " + intentos);
console.log("Clave incorrecta,ha superado cantidad intentos,acceso bloqueado");
