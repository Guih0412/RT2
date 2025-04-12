"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = exports.Multiplicador = exports.Subtrator = exports.Somador = void 0;
class Somador {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 + n2;
        };
    }
}
exports.Somador = Somador;
class Subtrator {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 - n2;
        };
    }
}
exports.Subtrator = Subtrator;
class Multiplicador {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 * n2;
        };
    }
}
exports.Multiplicador = Multiplicador;
class Divisor {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 / n2;
        };
    }
}
exports.Divisor = Divisor;
