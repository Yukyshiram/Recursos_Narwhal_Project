const readline = require('readline');
const { celsiusToFahrenheit } = require('./fahrenheit');
const { celsiusToKelvin } = require('./kelvin');
const { fahrenheitToKelvin } = require('./fa-to-ke');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('Seleccione una opción:');
    console.log('1. Convertir de Celsius a Fahrenheit');
    console.log('2. Convertir de Celsius a Kelvin');
    console.log('3. Convertir de Fahrenheit a Kelvin');
    console.log('4. Salir');
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            rl.question('Ingrese grados Celsius: ', (input) => {
                const celsius = parseFloat(input);
                console.log(`${celsius}°C son ${celsiusToFahrenheit(celsius)}°F`);
                rl.close();
            });
            break;
        case '2':
            rl.question('Ingrese grados Celsius: ', (input) => {
                const celsius = parseFloat(input);
                console.log(`${celsius}°C son ${celsiusToKelvin(celsius)}K`);
                rl.close();
            });
            break;
        case '3':
            rl.question('Ingrese grados Fahrenheit: ', (input) => {
                const fahrenheit = parseFloat(input);
                console.log(`${fahrenheit}°F son ${fahrenheitToKelvin(fahrenheit)}K`);
                rl.close();
            });
            break;
        case '4':
            rl.close();
            break;
        default:
            console.log('Opción no válida');
            rl.close();
            break;
    }
}

mostrarMenu();
rl.question('Ingrese una opción: ', (opcion) => {
    manejarOpcion(opcion);
});