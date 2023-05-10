
//Implemente un metodo llamado cantidadDeDivisores que reciba un 
//numero entero y devulva cantidad de divisores-
//Por ejemplo, para el numero 16, sus divisores son: 1,2,4,8,16,
//por lo que la respuesta deberia se 5.
//Re-utilice el metodo esMultiplo implementado para el ejercicio anterior.



import * as rls from"readline-sync"


let numero:number = rls.questionInt("Ingrese un numero, numero: ",);
    

function multiplo(num1:number, num2:number):boolean {  
    
    return (num1 % num2==0);

} 

function cantidadDeDivisores(numero) {
    let divisores:number = 1;
    for(let i = 1; i <= numero; i++) {
        if(multiplo(numero, i)) {
            divisores++;
        }
    }
    return divisores
}

console.log(cantidadDeDivisores(numero));

//Sergio no se como sacar al 0 como uno de los divisores. 

