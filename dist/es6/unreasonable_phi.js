const seq = (n) => (new Array(n)).fill(false).map((_, i) => i);
const d_phi = (dimensions = 1, accuracy = 30) => seq(accuracy).reduce((acc, _) => Math.pow(1 + acc, 1 / (dimensions + 1)), 2);
function gen(count = 50, dimensions = 2, seed = 0.5) {
    const g = d_phi(dimensions), alpha = new Array(dimensions);
    for (let i = 0; i < dimensions; ++i) {
        alpha[i] = Math.pow(1 / g, i + 1);
    }
    return seq(count).map(nth => alpha.map(a => ((a * (nth + 1)) + seed) % 1));
}
export { d_phi, gen };
