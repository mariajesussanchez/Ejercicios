//Desarrolle un algoritmo que permita loguearse a un sistema,
//ingresando un nombre de usuario y la contraseña adecuada.
//Considerar que tanto el usuario como la contraseña estan formados solo por letras.
//El sistema debera valdar que el usuario y la contraseña sean correctas,
//comparandolas con lo el sistema tiene registrado para ese usuario.
//Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave: claveJuan


import * as rls from "readline-sync";


let usuario:string = ""; 
usuario = rls.question("ingrese el nombre: ");
let contrasena:string = ""; 
contrasena = rls.question("ingrese la contrasena: ");
const usuarioCorrecto:string = "Juan";
const contrasenaCorrecta:string = "claveJuan";
if (usuario ==usuarioCorrecto && contrasena == contrasenaCorrecta) {
    console.log("usted se ha logueado correctamente")
} else 
   {console.log("acceso denegado, usuario o contrasena incorrecta")};
