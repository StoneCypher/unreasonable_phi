
const seq = (n: number): number[] =>
  (new Array(n)).fill(false).map( (_: unknown, i: number) => i);





const d_phi = (dimensions: number=1, accuracy: number=30) =>
  seq(accuracy).reduce( (acc, _) => Math.pow(1+acc, 1/(dimensions+1)) , 2);





function gen_c({ count,          dimensions,          seed,          scale,            trunc           }
              :{ count?: number, dimensions?: number, seed?: number, scale?: number[], trunc?: boolean }
            ) : unknown[] {

  const uCount      = (count      === undefined)? 50    : count,
        uDimensions = (dimensions === undefined)? 2     : dimensions,
        uSeed       = (seed       === undefined)? 0.5   : seed,
        uTrunc      = (trunc      === undefined)? false : trunc;

  // scale is allowed to be undefined

  if (scale !== undefined) {
    if (scale.length !== uDimensions) {
      throw new RangeError('Dimension length must match scale length')
  } }

  const g     = d_phi(uDimensions),
        alpha = new Array(uDimensions);

  for (let i=0; i<uDimensions; ++i) { alpha[i] = Math.pow(1/g, i+1); }

  if (scale !== undefined) {

    if (uTrunc) {

      return seq(uCount).map(nth =>
        alpha.map( (a, ath) => Math.trunc( (((a * (nth+1)) + uSeed) % 1) * scale[ath] ) )
      );

    } else {

      return seq(uCount).map(nth =>
        alpha.map( (a, ath) => (((a * (nth+1)) + uSeed) % 1) * scale[ath])
      );

    }

  } else {

    return seq(uCount).map(nth =>
      alpha.map(a => ((a * (nth+1)) + uSeed) % 1)
    );

  }

}





function gen(count?: number, dimensions?: number, scale?: number[], trunc?: boolean, seed?: number): unknown[] {
  return gen_c({ count, dimensions, scale, trunc, seed });
}





export { d_phi, gen, gen_c };
