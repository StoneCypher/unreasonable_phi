"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.within = exports.gen = exports.d_phi = void 0;
const seq = (n) => (new Array(n)).fill(false).map((_, i) => i);
const d_phi = (dimensions = 1, accuracy = 30) => seq(accuracy).reduce((acc, _) => Math.pow(1 + acc, 1 / (dimensions + 1)), 2);
exports.d_phi = d_phi;
function within(val1, val2, delta) {
    return Math.abs(val1 - val2) <= delta;
}
exports.within = within;
function gen(count = 50, dimensions = 2, seed = 0.5) {
    const g = d_phi(dimensions), alpha = new Array(dimensions);
    for (let i = 0; i < dimensions; ++i) {
        alpha[i] = Math.pow(1 / g, i + 1);
    }
    return seq(count).map(nth => alpha.map(a => ((a * (nth + 1)) + seed) % 1));
}
exports.gen = gen;
console.log(gen(6));
