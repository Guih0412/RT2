"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = void 0;
const calculadora_1 = require("./calculadora");
class Divisao extends calculadora_1.Calculadora {
    calcular(a, b) {
        return a / b;
    }
}
exports.Divisao = Divisao;
