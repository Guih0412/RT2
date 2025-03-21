"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtracao = void 0;
const calculadora_1 = require("./calculadora");
class Subtracao extends calculadora_1.Calculadora {
    calcular(a, b) {
        return a - b;
    }
}
exports.Subtracao = Subtracao;
