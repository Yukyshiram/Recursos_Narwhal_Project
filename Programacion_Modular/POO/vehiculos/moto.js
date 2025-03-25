import { Vehiculo } from "./vehiculo.js";

export class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    obtenerInfo() {
        return `${super.obtenerInfo()} - ${this.cilindrada}cc`;
    }
}
