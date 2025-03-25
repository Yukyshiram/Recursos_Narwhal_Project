export class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInfo() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
}