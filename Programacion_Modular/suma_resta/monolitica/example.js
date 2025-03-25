function calcularOperaciones(a, b, operacion) {
    if (operacion === "suma") {
        return a + b;
    } else if (operacion === "resta") {
        return a - b;
    } else if (operacion === "multiplicacion") {
        return a * b;
    } else if (operacion === "division") {
        return a / b;
    } else {
        return "Operación no válida";
    }
}

console.log(calcularOperaciones(5, 3, "suma")); 
console.log(calcularOperaciones(5, 3, "resta"));