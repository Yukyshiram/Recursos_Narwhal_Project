function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return b !== 0 ? a / b : "Error: División por cero";
}

export { multiplicacion, division };

// exportacion de tipo objeto