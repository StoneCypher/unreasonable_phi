declare const d_phi: (dimensions?: number, accuracy?: number) => number;
declare function gen_c({ count, dimensions, seed, scale, trunc }: {
    count?: number;
    dimensions?: number;
    seed?: number;
    scale?: number[];
    trunc?: boolean;
}): unknown[];
declare function gen(count?: number, dimensions?: number, scale?: number[], trunc?: boolean, seed?: number): unknown[];
export { d_phi, gen, gen_c };
