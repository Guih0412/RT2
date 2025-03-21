"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potenciacao = void 0;
const calculadora_1 = require("./calculadora");
class Potenciacao extends calculadora_1.Calculadora {
    calcular(a, b) {
        return Math.pow(a, b);
    }
}
exports.Potenciacao = Potenciacao;
