//realizar una estructura de control si llego el colectivo?;

import * as rls from "readline-sync";

let llegoElColectivo:string = rls.question("Esta viniendo el colectivo?:" ,);

//Asumimos que el usuario solo puede ingresar "s" para si o "n" para no;

while (llegoElColectivo == "n"){
    console.log("sigo esperando el colectivo");
    llegoElColectivo = rls.question("Ya vino el colectivo?:" ,);
    if (llegoElColectivo == "s"){
        console.log("llego el colectivo");
    }else 
    {console.log("ingrese una respuesta valida");
}
};
