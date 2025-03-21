"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const soma_1 = require("./soma");
const subtracao_1 = require("./subtracao");
const multiplicacao_1 = require("./multiplicacao");
const divisao_1 = require("./divisao");
const potenciacao_1 = require("./potenciacao");
const radiciacao_1 = require("./radiciacao");
const bhaskara_1 = require("./bhaskara");
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("Digite a operação desejada e os números (ex: Soma 5 3):\n", (valor) => {
    let instrucoes = valor.split(" ");
    // Verificando se o número de argumentos é correto
    if (instrucoes.length < 3) {
        console.log("Operação inválida! Você deve informar dois ou três números dependendo da operação.");
        leitor.close();
        return;
    }
    let numero1 = Number(instrucoes[1]);
    let numero2 = Number(instrucoes[2]);
    let numero3 = instrucoes[3] ? Number(instrucoes[3]) : undefined;
    // Tornando a operação minúscula para não ter problema com maiúsculas/minúsculas
    let operacao = instrucoes[0].toLowerCase();
    switch (operacao) {
        case "somar":
            let soma = new soma_1.Soma();
            console.log(`O resultado da operação é: ${soma.calcular(numero1, numero2)}\n`);
            break;
        case "subtrair":
            let subtracao = new subtracao_1.Subtracao();
            console.log(`O resultado da operação é: ${subtracao.calcular(numero1, numero2)}\n`);
            break;
        case "multiplicar":
            let multiplicacao = new multiplicacao_1.Multiplicacao();
            console.log(`O resultado da operação é: ${multiplicacao.calcular(numero1, numero2)}\n`);
            break;
        case "dividir":
            if (numero2 !== 0) {
                let divisao = new divisao_1.Divisao();
                console.log(`O resultado da operação é: ${divisao.calcular(numero1, numero2)}\n`);
            }
            else {
                console.log("Erro: divisão por zero!\n");
            }
            break;
        case "potenciacao":
            let potenciacao = new potenciacao_1.Potenciacao();
            console.log(`O resultado da operação é: ${potenciacao.calcular(numero1, numero2)}\n`);
            break;
        case "radiciacao":
            if (numero2 !== 0) {
                let radiciacao = new radiciacao_1.Radiciacao();
                console.log(`O resultado da operação é: ${radiciacao.calcular(numero1, numero2)}\n`);
            }
            else {
                console.log("Erro: índice da raiz não pode ser zero!\n");
            }
            break;
        case "bhaskara":
            if (numero3 !== undefined) {
                let bhaskara = new bhaskara_1.Bhaskara();
                console.log(`O resultado da equação é: ${bhaskara.calcular(numero1, numero2, numero3)}\n`);
            }
            else {
                console.log("Erro: Para Bhaskara, forneça três coeficientes (a, b, c)\n");
            }
            break;
        default:
            console.log("Operação inválida! Tente novamente.\n");
            break;
    }
    leitor.close();
});
