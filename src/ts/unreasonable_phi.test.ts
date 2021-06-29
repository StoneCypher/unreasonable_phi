
import { d_phi } from './unreasonable_phi';





function within(val1: number, val2: number, delta: number): boolean {
  return Math.abs(val1 - val2) <= delta;
}

describe('system', () => {
  test('test runner works', () => expect(1+2).toBe(3) );
});

describe('within', () => {
  test('1 -> 1.5 within 0.5',      () => expect(within(1, 1.5, 0.5)).toBe(true)   );
  test('1 -> 1.5 within 0.75',     () => expect(within(1, 1.5, 0.75)).toBe(true)  );
  test('1 -> 1.5 not within 0.25', () => expect(within(1, 1.5, 0.25)).toBe(false) );
  test('1.5 -> 1 within 0.5',      () => expect(within(1.5, 1, 0.5)).toBe(true)   );
  test('1.5 -> 1 within 0.75',     () => expect(within(1.5, 1, 0.75)).toBe(true)  );
  test('1.5 -> 1 not within 0.25', () => expect(within(1.5, 1, 0.25)).toBe(false) );
  test('-1 -> -1.5 within 0.5',      () => expect(within(-1, -1.5, 0.5)).toBe(true)   );
  test('-1 -> -1.5 within 0.75',     () => expect(within(-1, -1.5, 0.75)).toBe(true)  );
  test('-1 -> -1.5 not within 0.25', () => expect(within(-1, -1.5, 0.25)).toBe(false) );
  test('-1.5 -> -1 within 0.5',      () => expect(within(-1.5, -1, 0.5)).toBe(true)   );
  test('-1.5 -> -1 within 0.75',     () => expect(within(-1.5, -1, 0.75)).toBe(true)  );
  test('-1.5 -> -1 not within 0.25', () => expect(within(-1.5, -1, 0.25)).toBe(false) );
});

describe('phi', () => {
  test('phi(1) ~= 1.618033988749 to 12 digits', () => expect(within( d_phi(1), 1.618033988749, 0.00000000001 )).toBe(true) );
  test('phi(2) ~= 1.324717957244 to 12 digits', () => expect(within( d_phi(2), 1.324717957244, 0.00000000001 )).toBe(true) );
  test('phi(3) ~= 1.220744084605 to 12 digits', () => expect(within( d_phi(3), 1.220744084605, 0.00000000001 )).toBe(true) );
});

