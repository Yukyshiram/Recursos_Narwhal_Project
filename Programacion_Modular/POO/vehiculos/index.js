import { Auto } from "./auto.js";
import { Moto } from "./moto.js";

const miAuto = new Auto("Toyota", "Corolla", 2023, 4);
const miMoto = new Moto("Yamaha", "R3", 2022, 321);

console.log(miAuto.obtenerInfo());
console.log(miMoto.obtenerInfo());
