// Declara una funcion para cada problema planteado


// Función para calcular el perímetro de un círculo
function perimetroCirculo(radio) {
  return 2 * 3.1416 * radio;
}

const perimetroCirculoFlecha = (radio) => 2 * 3.1416 * radio;


//calcular el area de un rectangulo
function areaRectangulo(longitud, ancho) {
    const area = longitud * ancho;
    console.log("El área del rectángulo es:", area);
}
const areaRectanguloFlecha = (longitud, ancho) => longitud * ancho;

//calcular el cuadrado de un numero
function cuadradoNumero(numero) {
    const cuadrado = numero * numero;
    console.log("El cuadrado del número " + numero + " es igual a: " + cuadrado);
    return cuadrado;
}
