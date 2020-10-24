declare const d_phi: (dimensions?: number, accuracy?: number) => number;
declare function within(val1: number, val2: number, delta: number): boolean;
declare function gen(count?: number, dimensions?: number, seed?: number): number[][];
export { d_phi, gen, within };
