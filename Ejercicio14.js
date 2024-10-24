//Desarrollar un algoritmo que evalué la siguiente expresión aritmética 1/n.

let n = parseFloat(prompt("Digite un número (n):"));

if (n !== 0) {

    let resultado = 1 / n;
    console.log("El resultado de 1/n es:", resultado);
} else {
    console.log("No se puede dividir entre cero.");
}
