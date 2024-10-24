//Escriba el algoritmo que al capturar un numero entero convierta grados centígrados a kelvin, si captura un numero flotante diga si es mayor a 10.5, y si captura un carácter escriba su nombre.

let entrada = prompt("Digite un número o un carácter:");

if (!isNaN(entrada)) {
    let numero = parseFloat(entrada);

    if (Number.isInteger(numero)) {
        let kelvin = numero + 273.15;
        console.log(numero + "°C es igual a " + kelvin + " K");
    } else {
        if (numero > 10.5) {
            console.log(numero + " es mayor a 10.5");
        } else {
            console.log(numero + " no es mayor a 10.5");
        }
    }
} else if (entrada.length === 1) {
    console.log("El carácter ingresado es: " + entrada);
} else {
    console.log("La entrada no es válida.");
}

