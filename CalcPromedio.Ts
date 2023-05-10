//Calculo Promedio de diez notas.

import * as rls from "readline-sync";

let nota, suma, promedio, cantidadNotas, contador:number;
contador = 1;
suma = 0;
cantidadNotas = 10;

while (contador <= cantidadNotas) {
    nota = rls.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    contador = contador + 1;
    console.log("Interaccion numero: ", contador, "Valor de la suma: ",suma);
}
    promedio = suma / cantidadNotas;
    console.log("El promedio de las notas es: ", promedio);

