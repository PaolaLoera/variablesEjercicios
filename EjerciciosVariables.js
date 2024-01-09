/**
 * Declarar 10 variables de cada tipo de dato
 * sin tomar en cuenta
 * {objetos}, [arrays] y null 
 * */


// Variables de tipo number
var edad = 26;
var cantidadProductos = 10;
let temperatura = 28;
let distancia = 50.5;
const velocidad = 60;
const peso = 55;
var altura = 155;
let calificacion = 9.9;
const precio = 99.99;
var cantidadEmpleados = 50;

// Variables de tipo string
var nombre = "Paola";
var apellido = "Loera";
let curso = "Java";
let ciudad = "Guadalajara";
const pais = "Mexico";
const idioma = "Español";
var profesion = "Developer";
let proyecto = "Web";
const categoria = "Desarrollo";
var framework = "Angular";

// Variables de tipo boolean
var esDiaLaboral = true;
var tieneDescuento = false;
let esFestivo = true;
let llueve = false;
const clienteNuevo = true;
const esMayorEdad = false;
var usuarioActivo = true;
let inLogin = false;
const aceptoTerminos = true;
var tienePermiso = false;






/**
 *  Declarar variables numericas
 * y realizar las operaciones
 * aritmeticas basicas 
 * */

//SUMA
let valorA = 10;
let valorB = 20;

let sumaValores = valorA + valorB;
console.log(sumaValores);

//RESTA
let numero1 = 50;
let numero2 = 30;

let restaNumeros = numero1 - numero2;
console.log(restaNumeros);

//MULTIPLICACION
let año1 = 2000;
let año2 = 1999;

let multiplicaAños = año1 * año2;
console.log(multiplicaAños);

//DIVISION

let dividendo = 6;
let divisor = 2;

let divisionClasica = dividendo / divisor;
console.log(divisionClasica);





/**
 *  Declarar variables que concatenen
 * cadenas de texto
 * */

let mensaje1 = "Daenerys Stormborn, ";
let mensaje2 = "rompedora de Cadenas, ";
let mensaje3 = "madre de Dragones, ";
let mensaje4 = "reina de los Ándalos, los Rhoynar y los Primeros Hombres, ";
let mensaje5 = "señora de los Siete Reinos y Protectora del Reino.";

let mensajeCompleto = mensaje1 + mensaje2 + mensaje3 + mensaje4 + mensaje5;
console.log(mensajeCompleto);




/**
 *  Declarar 5 variables
 * y convertirlas a otro tipo de dato 
 * */

let dragones = 10;
let espadasValyrias = 5;
let tierraDelReino = "Aguasdulces";
let estaVivo = true;
let numeroReyes = 1;


let dragonesString = String(dragones);
let espadasValyriasString = String(espadasValyrias);
let tierraDelReinoNumber = Number(tierraDelReino);
let estaVivoNumber = Number(estaVivo);
let numeroReyesBoolean = Boolean(numeroReyes);

console.log(dragonesString, espadasValyriasString, tierraDelReinoNumber, estaVivoNumber, numeroReyesBoolean);
