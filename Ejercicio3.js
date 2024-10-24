//desarrollar el algoritmo dando como dato el sueldo de un trabajador, le aplica un aumento del 15% si su sueldo es inferior a $300.000.
let sueldo = parseInt(prompt("Digite su sueldo"));
if (sueldo < 300000) {
    let aumento = sueldo * 0.15; 
    console.log("Tu sueldo con aumento es de:", sueldo + aumento);
} else {
    console.log("Tu sueldo es de:", sueldo);
}
