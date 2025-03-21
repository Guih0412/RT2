import { Calculadora } from "./calculadora";

export class Soma extends Calculadora{
    calcular(a: number, b: number): number {
        return a+b
    }
}