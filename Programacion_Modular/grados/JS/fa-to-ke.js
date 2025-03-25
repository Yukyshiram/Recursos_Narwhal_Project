const { fahrenheitToCelsius } = require('./fahrenheit');
const { celsiusToKelvin } = require('./kelvin');

function fahrenheitToKelvin(fahrenheit) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
}

module.exports = {
    fahrenheitToKelvin
};