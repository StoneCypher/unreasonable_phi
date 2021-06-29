
const seq = (n: number): number[] =>
  (new Array(n)).fill(false).map( (_: unknown, i: number) => i);





const d_phi = (dimensions: number=1, accuracy: number=30) =>
  seq(accuracy).reduce( (acc, _) => Math.pow(1+acc, 1/(dimensions+1)) , 2);





function gen(count: number=50, dimensions: number=2, seed: number=0.5): number[][] {

  const g     = d_phi(dimensions),
        alpha = new Array(dimensions);

  for (let i=0; i<dimensions; ++i) { alpha[i] = Math.pow(1/g, i+1); }

  return seq(count).map(nth =>
    alpha.map(a => ((a * (nth+1)) + seed) % 1)
  );

}





export { d_phi, gen };
