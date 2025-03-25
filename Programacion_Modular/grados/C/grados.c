#include <stdio.h>
#include "conversions.h"

void mostrarMenu() {
    printf("Seleccione una opción:\n");
    printf("1. Convertir de Celsius a Fahrenheit\n");
    printf("2. Convertir de Celsius a Kelvin\n");
    printf("3. Convertir de Fahrenheit a Kelvin\n");
    printf("4. Salir\n");
}

void manejarOpcion(int opcion) {
    float grados;
    switch (opcion) {
        case 1:
            printf("Ingrese grados Celsius: ");
            scanf("%f", &grados);
            printf("%.2f°C son %.2f°F\n", grados, celsiusToFahrenheit(grados));
            break;
        case 2:
            printf("Ingrese grados Celsius: ");
            scanf("%f", &grados);
            printf("%.2f°C son %.2fK\n", grados, celsiusToKelvin(grados));
            break;
        case 3:
            printf("Ingrese grados Fahrenheit: ");
            scanf("%f", &grados);
            printf("%.2f°F son %.2fK\n", grados, fahrenheitToKelvin(grados));
            break;
        case 4:
            printf("Saliendo...\n");
            break;
        default:
            printf("Opción no válida\n");
            break;
    }
}

int main() {
    int opcion;
    do {
        mostrarMenu();
        printf("Ingrese una opción: ");
        scanf("%d", &opcion);
        manejarOpcion(opcion);
    } while (opcion != 4);
    return 0;
}