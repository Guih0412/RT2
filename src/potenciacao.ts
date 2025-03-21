import { Calculadora } from "./calculadora";

export class Potenciacao extends Calculadora{
    calcular(a:number,b:number):number{
        return Math.pow(a,b)
    }
}