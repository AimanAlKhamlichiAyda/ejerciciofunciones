
// 1.Declare una función fullName e imprima su nombre completo.
function fullName(names) {
    let namess = "aiman al khamlichi ayda"
    console.log(namess);
}
fullName();

//2.Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
function fulName(firstName, lastName) {
    let fiirstName = "aiman";
    let lasstName = "al khamlichi ayda";
    console.log(`${fiirstName} ${lasstName}`);

}
fulName();

//3.Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
function adddNumbers(sum1, sum2) {
    return (sum1 + sum2)
}
console.log(adddNumbers(12, 15));

//4.El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
function areaOfRectangle(length, width) {
    return (length * width)
}
console.log(areaOfRectangle(20, 20));

//5.El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
function perimeterOfRectangle(length, width) {
    return (2 * (length + width))
}
console.log(perimeterOfRectangle(20, 20));

//6.El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
function volumeOfRectPrism(length, width, height) {
    return (length * width * height)
}
console.log(volumeOfRectPrism(20, 5, 3));

//7.El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
function areaOfCircle(pi, r) {
    return (pi * r * r)
}
console.log(areaOfCircle(3.14, 5, 5));

//8.La circunferencia de un círculo se calcula de la siguiente manera: _circumference = 2πr_. Escribe una función _circumOfCircle_ que calcule la circunferencia de un círculo.

function circumOfCircle(pi, r) {
    return (pi * pi * r)
}
console.log(areaOfCircle(3.14, 3.14, 5));

//9.La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.

function density(mass, volume) {
    return (mass / volume)
}
console.log(density(10, 2));

//10.La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.

function speed(distanciaR, tiempoTotal) {
    return (distanciaR / tiempoTotal)
}
console.log(speed(200, 2));

//11.El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.

function weight(mass, gravity) {
    return (mass * gravity)
}
console.log(weight(50, 9.8));

//12.La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
function convertCelsiusToFahrenheit(C, nueve, cinco, treintaydos) {
    return ((C * nueve / cinco) + treintaydos)
}
console.log(convertCelsiusToFahrenheit(20, 9, 5, 32));


//13.El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.

function imc(kg, altura) {
    return (kg / (altura * altura));
}
console.log(imc(87, 1.85, 1.85));

//14.Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
function checkSeason(mes) {
    if (mes >= 3 && mes <= 5) {
        return "Primavera";
    } else if (mes >= 6 && mes <= 8) {
        return "Verano";
    } else if (mes >= 9 && mes <= 11) {
        return "Otoño";
    } else {
        return "Invierno";
    }
}
let mes = 9;
let estacion = checkSeason(mes);
console.log(`El mes  ${mes}  cae en la estación de  ${estacion} .`);

//15.Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
function Max(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}
console.log(Max(0, 10, 5));
console.log(Max(0, -10, -2));

//========================Nivel 2==========================

//1.La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
}
console.log(solveLinEquation(2, 3, -5, 1, 2));

//2.La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
function solveQuadEquation(a, x, b, c) {
    return (a * x + b * x + c)
}
console.log(solveQuadEquation(5, 2, 6, 2, 8));

//3.Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.

let myArray = [1, 2, 3, 4, 5];
function printArray() {
    return (myArray.toString())
}
console.log(printArray(myArray));

//4.Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.


 