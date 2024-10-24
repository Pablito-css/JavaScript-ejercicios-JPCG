//desarrollar un algoritmo que asigne el sueldo a cinco empleados, teniendo en cuenta su categoría.
let A = 480000;
let B = 530000;
let C = 560000;
let D = 590000;
let E = 650000;

let categoria = prompt("Digita tu categoría, recuerda que va desde la A hasta la E");
let sueldo;

if (categoria === "A") {
    sueldo = A;
    console.log("Dada tu categoría, tu sueldo es de: $" + sueldo);
} else if (categoria === "B") {
    sueldo = B;
    console.log("Dada tu categoría, tu sueldo es de: $" + sueldo);
} else if (categoria === "C") {
    sueldo = C;
    console.log("Dada tu categoría, tu sueldo es de: $" + sueldo);
} else if (categoria === "D") {
    sueldo = D;
    console.log("Dada tu categoría, tu sueldo es de: $" + sueldo);
} else if (categoria === "E") {
    sueldo = E;
    console.log("Dada tu categoría, tu sueldo es de: $" + sueldo);
} else {
    console.log("Ingresaste un valor inválido, recuerda que es solo entre A y E.");
}

