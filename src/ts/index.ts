
const seq = n =>
  (new Array(n)).fill(false).map( (_, i) => i);

const d_phi = (dimensions=1, accuracy=10) =>
  seq(accuracy).reduce( (acc, _) => Math.pow(1+acc, 1/(dimensions+1)) , 2);





function gen(count: number=50, dimensions: number=2, seed: number=0.5): number[] {

  const g = d_phi(dimensions),
        a = new Array(dimensions).fill(0);

  a.forEach( (_,i) => a[i] = Math.pow(1/g, i+i) );

  console.log(a);

  seq(count).map(nth => {

  });

}





export { d_phi };
