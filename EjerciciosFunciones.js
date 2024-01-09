// Declara una funcion para cada problema planteado


// Función para calcular el perímetro de un círculo
function perimetroCirculo(radio) {
  return 2 * 3.14159 * radio;
}

const perimetroCirculoFlecha = (radio) => 2 * 3.14159 * radio;


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
const cuadradoNumeroFlecha = (numero) => numero * numero;


//calcular la conversion de grados celsius a farenheit
function celsiusAFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit`);
    return fahrenheit;
}
const celsiusAFahrenheitFlecha = (celsius) => (celsius * 9/5) + 32;


//calcular el valor del voltaje dadas la resistencia y la corriente
function valorVoltaje(corriente, resistencia){
    const voltaje = corriente * resistencia
    console.log("El voltaje es: ", voltaje);
}
const valorVoltajeFlecha = (corriente, resistencia) => corriente * resistencia;

//calcular el volumen de una esfera
function volumenEsfera(radioEsfera){
    const volumen = (4/3) * 3.14159 * (radioEsfera * radioEsfera * radioEsfera);
    console.log("El volumen de la esfera es:", volumen);
}
const volumenEsferaFlecha = (radioEsfera) => (4/3) * 3.14159 * (radioEsfera * radioEsfera * radioEsfera);

