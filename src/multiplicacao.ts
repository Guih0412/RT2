import { Calculadora } from "./calculadora";

export class Multiplicacao extends Calculadora{
    calcular(a:number, b:number): number{
        return a*b
    }
}