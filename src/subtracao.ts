import { Calculadora } from "./calculadora";

export class Subtracao extends Calculadora{
    calcular(a:number, b: number): number{
        return a-b
    }
}