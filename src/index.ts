class Somador{
    calcular = (n1:number, n2:number) =>{
        return n1 + n2
    }
}

class Subtrator{
    calcular= (n1:number, n2:number) => {
        return n1-n2
    }
}
class Multiplicador{
    calcular= (n1:number, n2:number) => {
        return n1*n2
    }
}
class Divisor{
    calcular= (n1:number, n2:number) => {
        return n1/n2
    }
}

export {Somador,Subtrator,Multiplicador,Divisor}