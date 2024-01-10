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
