
//Ejercicio 2
function calculadora(){

//Datos de Entrada
/*Se convierten a valor numerico la entrada de los valores proporcionados por el usuario*/
var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));



//Proceso
/*Operaciones matematicas*/
var suma = (num1 + num2);
var resta = (num1 - num2);
var multiplica = (num1 * num2);
/*El simbolo "/" es igual a division*/
var division = (num1 / num2);
/*El simbolo "%" es igual a modulo o resto de una division*/
var modulo = (num1 % num2);


//Datos de salida
/*Concatenacion de variable usando "+"*/
alert(`La suma es: `+suma)
/*Uso de intermopolacion para concatenar las variables*/
alert(`La resta es: ${resta}`)
alert(`La multiplicacion es: ${multiplica}`)
alert(`La division es: ${division}`)
alert(`El resto es: ${modulo}`)
}

//Ejercicio 3
function conversor(){
//Datos de Entrada
/*Se convierten a valor numerico la entrada de los valores proporcionados por el usuario*/
var tempCelsius = parseInt(prompt("Ingrese grados Celsius"));
/*Variables constantes que son estaticas o permanentes*/
const tempKelvin = 273.15;
const tempFahrenheit = 32;


//Proceso
var resultKelvin = (tempCelsius + tempKelvin);
var resultFahrenheit = (tempCelsius * 9/5) + 32;


//Datos de salida
/*Concatenacion con +*/
alert("El valor de" +tempCelsius+"°C en Kelvins es igual a "+resultKelvin+"°K")
/*Uso de intermopolacion para concatenar las variables (Mucho mas facil)*/
alert(`El valor de ${tempCelsius}°C en Fahrenheit es igual a ${resultFahrenheit}°F`)
}


//Ejercicio 4
function calendario(){
//Datos de entrada
var dias = parseInt(prompt("Ingrese la cantidad de días:"));
const unAño = 365;
const unaSemana = 7;


//Proceso
var resultAno = Math.floor(dias / 365);
var resultSemanas = Math.floor(dias / 7);


//Datos de salida
alert(`los dias en años son: ${resultAno}`)
alert(`los dias en años son: ${resultSemanas}`)
}



//Ejercicio 5
function sumaYpromedio(){
//Datos de entrada
/*Se convierten a valor numerico la entrada de los valores proporcionados por el usuario*/
var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
var num3 = parseInt(prompt("Ingrese el tercer número"));
var num4 = parseInt(prompt("Ingrese el cuarto número"));
var num5 = parseInt(prompt("Ingrese el quinto número"));

//Procesos
var suma = (num1 + num2 + num3 + num4 + num5);
var promedio = suma / 5;


//Datos de salida
/*Concatenacion con +*/
alert(`La suma es: `+suma)
/*Uso de intermopolacion para concatenar las variables*/
alert(`El promedio es: ${promedio}`)


}
