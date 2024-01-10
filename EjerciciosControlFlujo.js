//Ejercicio 1
function puedeVotar (edad) {
    if (edad >= 18){
        console.log("Tienes la edad suficiente para votar.");
    } else {
        console.log("No tienes la edad suficiente para votar.");
    }
}



//Ejercicio 2
function promedioAlumno (nota1, nota2, nota3, nota4) {
   
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
        
        if(promedio >= 7) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
}



//Ejercicio 4
function numDiv7y8 (numero) {

    if (numero % 7 === 0 && numero % 8 === 0 ){
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }

}



//Ejercicio 5
function numDiv4o9 (numero) {

    if (numero % 4 === 0 || numero % 9 === 0 ){
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }

}



//Ejercicio 6
function calculadoraSimple(operacionEnString, num1, num2) {
    
    if (operacionEnString === "suma") {
        const suma = num1 + num2;
        console.log(`El resultado de la suma es ${suma}`);
                
    } else if (operacionEnString === "resta") {
        const resta = num1 - num2;
        console.log(`El resultado de la resta es ${resta}`);
        
    } else if (operacionEnString === "multiplicacion") {
        const multiplicacion = num1 * num2;
        console.log(`El resultado de la multiplicacion es ${multiplicacion}`);
        
    } else if (operacionEnString === "division") {
        const division = num1 / num2;
        console.log(`El resultado de la division es ${division}`);
        
    } else {
        console.log("Entrada invalida.");

    }
}



// Ejercicio 7
function categoriaPelicula (categoriaEnString) {
    switch (categoriaEnString){

     case "accion":
         console.log("Pelicula de accion: Titanes del Pacífico.");
     break;

     case "drama":
         console.log("Pelicula de drama: La llegada.");
     break;

     case "comedia":
         console.log("Pelicula de comedia: Norbit.");
     break;
     case "romance":
         console.log("Pelicula de romance: La forma del agua.");
     break;

     case "suspenso":
         console.log("Pelicula de suspenso: Señales.");
     break;

     case "terror":
         console.log("TPelicula de terror: El legado del diablo.");
     break;

     default: console.log("Interesante...Debe ser un genero nuevo, no tengo nada.");
     break;
 }

}



//Ejercicio 8
function ATM (ingreseOperacionEnString) {
    
    if (ingreseOperacionEnString === "retirar dinero") {
        console.log(`1. Retirar dinero`);
                
    } else if (ingreseOperacionEnString === "transferencia") {
        console.log(`2. Transferencia`);
        
    } else if (ingreseOperacionEnString === "deposito") {
        console.log(`3. Deposito`);
        
    } else if (ingreseOperacionEnString === "pago de servicios") {
        console.log(`4. Pago de servicios`);
        
    } else {
        console.log("Operacion invalida.");
    }
}



//Ejercicio 9
function conversorDivisas(cantidadEnPesos, divisaDeseada) {

    let conversion;

    switch (divisaDeseada){

    case "dolares estadounidenses":
     conversion = cantidadEnPesos * 0.059;
     console.log(`${cantidadEnPesos} pesos son ${conversion} dolares.`);
    break;

    case "euros":
     conversion = cantidadEnPesos * 0.054;
     console.log(`${cantidadEnPesos} pesos son ${conversion} euros.`);
    break;

    case "yenes japoneses":
     conversion = cantidadEnPesos * 8.53;
     console.log(`${cantidadEnPesos} pesos son ${conversion} yenes japoneses.`);
    break;
    
    case "libra esterlina":
     conversion = cantidadEnPesos * 0.046;
     console.log(`${cantidadEnPesos} pesos son ${conversion} libras esterlina.`);
    break;

    case "franco suizo":
     conversion = cantidadEnPesos * 0.050;
     console.log(`${cantidadEnPesos} pesos son ${conversion} francos suizos.`);
    break;

    default: console.log("Entrada Invalida.");
    break;
}
    
}



//Ejercicio 10
function codigoDescuento (codigo, precioProducto){
   
    codigoCorrecto =  "DESCUENTO10";
    descuento = precioProducto * 0.10
    precioFinal = precioProducto - descuento;

    if (codigo === codigoCorrecto) {
        
        console.log("El precio final es de: " + precioFinal);

    } else {
        console.log("Codigo Invalido");
    }
        
}
