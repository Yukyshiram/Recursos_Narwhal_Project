import { Vehiculo } from "./vehiculo.js";

export class Auto extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }

    obtenerInfo() {
        return `${super.obtenerInfo()} - ${this.puertas} puertas`;
    }
}