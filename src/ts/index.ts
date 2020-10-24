
const seq = (n: number): number[] =>
  (new Array(n)).fill(false).map( (_: unknown, i: number) => i);

const d_phi = (dimensions: number=1, accuracy: number=30) =>
  seq(accuracy).reduce( (acc, _) => Math.pow(1+acc, 1/(dimensions+1)) , 2);





function within(val1: number, val2: number, delta: number): boolean {
  return Math.abs(val1 - val2) <= delta;
}





function gen(count: number=50, dimensions: number=2, seed: number=0.5): number[] {

  const g = d_phi(dimensions),
        a = new Array(dimensions).fill(0);

  a.forEach( (_,i) => a[i] = Math.pow(1/g, i+i) );

  console.log(a);

  return seq(count).map(nth => nth+seed); // todo

}





export { d_phi, gen, within };
