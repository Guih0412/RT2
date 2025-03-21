import * as readline from "readline";
import { Soma } from "./soma";
import { Subtracao } from "./subtracao";
import { Multiplicacao } from "./multiplicacao";
import { Divisao } from "./divisao";
import { Potenciacao } from "./potenciacao";
import { Radiciacao } from "./radiciacao";
import { Bhaskara } from "./bhaskara";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite a operação desejada e os números (ex: Soma 5 3):\n", (valor) => {
    let instrucoes = valor.split(" ");
    
    
    if (instrucoes.length < 3) {
        console.log("Operação inválida! Você deve informar dois ou três números dependendo da operação.");
        leitor.close();
        return;
    }

    let numero1 = Number(instrucoes[1]);
    let numero2 = Number(instrucoes[2]);
    let numero3 = instrucoes[3] ? Number(instrucoes[3]) : undefined;
    
    
    let operacao = instrucoes[0].toLowerCase();  

    switch (operacao) {
        case "somar":
            let soma = new Soma();
            console.log(`O resultado da operação é: ${soma.calcular(numero1, numero2)}\n`);
            break;
        case "subtrair":
            let subtracao = new Subtracao();
            console.log(`O resultado da operação é: ${subtracao.calcular(numero1, numero2)}\n`);
            break;
        case "multiplicar":
            let multiplicacao = new Multiplicacao();
            console.log(`O resultado da operação é: ${multiplicacao.calcular(numero1, numero2)}\n`);
            break;
        case "dividir":
            if (numero2 !== 0) {
                let divisao = new Divisao();
                console.log(`O resultado da operação é: ${divisao.calcular(numero1, numero2)}\n`);
            } else {
                console.log("Erro: divisão por zero!\n");
            }
            break;
        case "potenciacao":
            let potenciacao = new Potenciacao();
            console.log(`O resultado da operação é: ${potenciacao.calcular(numero1, numero2)}\n`);
            break;
        case "radiciacao":
            if (numero2 !== 0) {
                let radiciacao = new Radiciacao();
                console.log(`O resultado da operação é: ${radiciacao.calcular(numero1, numero2)}\n`);
            } else {
                console.log("Erro: índice da raiz não pode ser zero!\n");
            }
            break;
        case "bhaskara":
            if (numero3 !== undefined) {
                let bhaskara = new Bhaskara();
                console.log(`O resultado da equação é: ${bhaskara.calcular(numero1, numero2, numero3)}\n`);
            } else {
                console.log("Erro: Para Bhaskara, forneça três coeficientes (a, b, c)\n");
            }
            break;
        default:
            console.log("Operação inválida! Tente novamente.\n");
            break;
    }

    leitor.close();
});
