"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplicacao = void 0;
const calculadora_1 = require("./calculadora");
class Multiplicacao extends calculadora_1.Calculadora {
    calcular(a, b) {
        return a * b;
    }
}
exports.Multiplicacao = Multiplicacao;
