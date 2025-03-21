"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
const calculadora_1 = require("./calculadora");
class Bhaskara extends calculadora_1.Calculadora {
    calcular(a, b, c) {
        const delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            return "Nao há raizes";
        }
        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a);
        const x2 = (-b - raizDelta) / (2 * a);
        return [x1, x2];
    }
}
exports.Bhaskara = Bhaskara;
