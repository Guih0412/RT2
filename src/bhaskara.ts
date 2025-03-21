import { Calculadora } from "./calculadora";

export class Bhaskara extends Calculadora{
   calcular(a:number, b:number, c:number): number[] | string{
      const delta= b**2 - 4*a*c

      if (delta<0){
        return "Nao há raizes"
      }
      

      const raizDelta= Math.sqrt(delta)
      const x1= (-b + raizDelta) / (2*a)
      const x2= (-b - raizDelta) / (2*a)

      return [x1,x2]
   }
}