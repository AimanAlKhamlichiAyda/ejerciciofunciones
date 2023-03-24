
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
function showDateTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
}
console.log(showDateTime());

//5.Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return [x, y];
}
console.log(swapValues(3, 4));

//6.Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

function reverseArray(arr) {
    return arr.reduceRight((acc, val) => acc.concat(val), []);
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//7.Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.

function capitalizeArray(miarr) {
    const capitalizedarray = "hola good morning"
    return capitalizedarray;
}
console.log(capitalizeArray());

//8.Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.

function addItem(element) {
    const newArray = ["you are studing function"];
    newArray.push(element);
    return newArray;
}
console.log(addItem());

//9.Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.

function removeItem(index, arr) {
    if (index < 0 || index >= arr.length) {

        return arr;
    }

    return arr.filter((_, i) => i !== index);
}
const originalArray = [1, 2, 3, 4, 5];
const indexToRemove = 2;

const newArray = removeItem(indexToRemove, originalArray);

console.log(newArray);

//10.Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.

function sumOfNumbers(num) {
    let sum = 20;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
const result = sumOfNumbers(5);

console.log(result);


//11.Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.

function sumOfOdds(num) {
    let sum = 5;
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
const resultt = sumOfOdds(10);

console.log(resultt);

//12.Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.

function sumOfEven(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
const resullt = sumOfEven(10);

console.log(resullt);

//13.Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
function evensAndOdds(num) {
    let evens = 0;
    let odds = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return `Even numbers: ${evens}, Odd numbers: ${odds}`;
}
const resuult = evensAndOdds(10);

console.log(resuult);

//14.Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

//15.Escriba una función randomUserIp que genere una ip de usuario aleatoria.

function randomUserIp() {
    let ip = "";
    for (let i = 0; i < 4; i++) {
        ip += Math.floor(Math.random() * 256);
        if (i !== 3) {
            ip += ".";
        }
    }
    return ip;
}
console.log(randomUserIp());

//16.Escriba una función randomMacAddress que genere una dirección mac aleatoria.

function randomMacAddress() {
    let mac = "";
    for (let i = 0; i < 6; i++) {
        mac += Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
        if (i !== 5) {
            mac += ":";
        }
    }
    return mac;
}

console.log(randomMacAddress());

//17.Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

function randomHexaNumberGenerator() {
    return Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
}

console.log(randomHexaNumberGenerator());

//18.Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.

function userIdGenerator() {
    let id = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
}
console.log(userIdGenerator());


//========================Nivel 3==========================


//1.Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

function userIdGeneratedByUser() {
    const length = prompt("Ingrese la cantidad de caracteres para el ID:");
    const count = prompt("Ingrese la cantidad de IDs a generar:");
    let ids = [];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let j = 0; j < count; j++) {
        let id = "";
        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        ids.push(id);
    }
    return ids;
}

console.log(userIdGeneratedByUser());

//2.Escriba una función llamada rgbColorGenerator que genera colores rgb

function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const color1 = rgbColorGenerator();
console.log(color1);

//3.Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.

function arrayOfHexaColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const hex = Math.floor(Math.random() * 16777215).toString(16);
        const color = "#" + ("000000" + hex).slice(-6);
        colors.push(color);
    }
    return colors;
}
const colors = arrayOfHexaColors(5);
console.log(colors);

//4.Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.

function arrayOfRgbColors(numColors) {
    const colorss = [];
    for (let i = 0; i < numColors; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        colorss.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colorss;
}

const colorss = arrayOfRgbColors(5);
console.log(colorss);

//5.Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.

function convertHexaToRgb(hexColor) {

    if (hexColor[0] === '#') {
        hexColor = hexColor.slice(1);
    }


    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);


    return `rgb(${red}, ${green}, ${blue})`;
}
const coloors = convertHexaToRgb(5);
console.log(coloors);

//6.Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
function convertRgbToHexa(r, g, b) {

    let hexR = r.toString(16).padStart(2, '0');
    let hexG = g.toString(16).padStart(2, '0');
    let hexB = b.toString(16).padStart(2, '0');

    let hexaColor = "#" + hexR + hexG + hexB;

    return hexaColor;
}
console.log(hexaColor);


//7.Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb

function generateColors(format, numColors) {
    let colors = [];

    for (let i = 0; i < numColors; i++) {
        let color = "";

        if (format === "rgb") {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            color = `rgb(${r}, ${g}, ${b})`;
        }

        else if (format === "hexa") {
            let hexR = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
            let hexG = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
            let hexB = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
            color = `#${hexR}${hexG}${hexB}`;
        }

        colors.push(color);
    }

    return colors;
}
console.log(generateColors("hexa", 3));

//8.Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada

function shuffleArray(array) {

    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}
let ooriginalArray = [1, 2, 3, 4, 5];
let shuffledArray = shuffleArray(originalArray);
console.log(originalArray);
console.log(shuffledArray);

//9.Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.

function factorial(number) {
    if (number < 0) {

        return undefined;
    } else if (number === 0) {

        return 1;
    } else {

        let result = 1;
        for (let i = number; i > 0; i--) {
            result *= i;
        }
        return result;
    }
}
console.log(factorial(5));

//10.Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.

function isEmpty(param) {
    if (param === undefined || param === null) {

        return true;
    } else if (typeof param === 'string' || Array.isArray(param)) {

        return param.length === 0;
    } else if (typeof param === 'object') {

        return Object.keys(param).length === 0;
    } else {

        return false;
    }
}
console.log(isEmpty(''));

//11.Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.

function sum(...args) {

    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sum(1, 2, 3));


//12.Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
function sumOfArrayItems(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== 'number') {
            return 'Error: La matriz contiene un elemento no numérico';
        }
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArrayItems([1, 2, 3, 4]));



//13.Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== 'number') {
            return 'Error: La matriz contiene un elemento no numérico';
        }
        sum += arr[i];
    }

    if (arr.length === 0) {
        return 0;
    } else {
        return sum / arr.length;
    }
}
console.log(average([1, 2, 3, 4]));


//14.Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

function modifyArray(arr) {
    if (arr.length < 5) {
        return 'Elemento no encontrado';
    } else {
        arr[4] = 'Nuevo elemento';
        return arr;
    }
}
console.log(modifyArray([1, 2, 3, 4, 5, 6]));

//15.Escribe una función llamada isPrime, que verifica si un número es un número primo.

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(3));

//16.Escriba una función que verifique si todos los elementos son únicos en un array.

function areAllElementsUnique(arr) {

    const uniqueElements = new Set(arr);

    return uniqueElements.size === arr.length;
}
console.log(areAllElementsUnique([1, 2, 3, 4, 5]));


//17.Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.

function areAllElementsSameType(arr) {

    if (arr.length === 0) {
        return true;
    }

    const elementType = typeof arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== elementType) {
            return false;
        }
    }
    return true;
}
console.log(areAllElementsSameType([1, 2, 3, 4, 5]));


//18.El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.

function isValidVariable(variableName) {

    if (variableName.length === 0) {
        return false;
    }

    if (/^\d/.test(variableName)) {
        return false;
    }

    if (!/^[a-zA-Z0-9_$]+$/.test(variableName)) {
        return false;
    }
    return true;
}
console.log(isValidVariable("variableName"));


//19.Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

function getRandomNumbers() {
    let numbers = new Set();
    while (numbers.size < 7) {
        let randomNum = Math.floor(Math.random() * 10);
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}
const randomNumbers = getRandomNumbers();
console.log(randomNumbers);



//20.Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido













































































































