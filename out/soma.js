"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soma = void 0;
const calculadora_1 = require("./calculadora");
class Soma extends calculadora_1.Calculadora {
    calcular(a, b) {
        return a + b;
    }
}
exports.Soma = Soma;
