'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const seq = (n) => (new Array(n)).fill(false).map((_, i) => i);
const d_phi = (dimensions = 1, accuracy = 30) => seq(accuracy).reduce((acc, _) => Math.pow(1 + acc, 1 / (dimensions + 1)), 2);
function gen_c({ count, dimensions, seed, scale, trunc }) {
    const uCount = (count === undefined) ? 50 : count, uDimensions = (dimensions === undefined) ? 2 : dimensions, uSeed = (seed === undefined) ? 0.5 : seed, uTrunc = (trunc === undefined) ? false : trunc;
    if (scale !== undefined) {
        if (scale.length !== uDimensions) {
            throw new RangeError('Dimension length must match scale length');
        }
    }
    const g = d_phi(uDimensions), alpha = new Array(uDimensions);
    for (let i = 0; i < uDimensions; ++i) {
        alpha[i] = Math.pow(1 / g, i + 1);
    }
    if (scale !== undefined) {
        if (uTrunc) {
            return seq(uCount).map(nth => alpha.map((a, ath) => Math.trunc((((a * (nth + 1)) + uSeed) % 1) * scale[ath])));
        }
        else {
            return seq(uCount).map(nth => alpha.map((a, ath) => (((a * (nth + 1)) + uSeed) % 1) * scale[ath]));
        }
    }
    else {
        return seq(uCount).map(nth => alpha.map(a => ((a * (nth + 1)) + uSeed) % 1));
    }
}
function gen(count, dimensions, scale, trunc, seed) {
    return gen_c({ count, dimensions, scale, trunc, seed });
}

exports.d_phi = d_phi;
exports.gen = gen;
exports.gen_c = gen_c;
