import { Calculadora } from "./calculadora";

export class Radiciacao extends Calculadora{
    calcular(a:number, b:number): number{
        return Math.pow(a,1/b)
    }
}