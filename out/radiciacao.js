"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiciacao = void 0;
const calculadora_1 = require("./calculadora");
class Radiciacao extends calculadora_1.Calculadora {
    calcular(a, b) {
        return Math.pow(a, 1 / b);
    }
}
exports.Radiciacao = Radiciacao;
