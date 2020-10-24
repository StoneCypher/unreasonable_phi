
import { within } from './index';

test('test runner works', () => expect(1+2).toBe(3) );

test('1 -> 1.5 within 0.5',      () => expect(within(1, 1.5, 0.5)).toBe(true)   );
test('1 -> 1.5 within 0.75',     () => expect(within(1, 1.5, 0.75)).toBe(true)  );
test('1 -> 1.5 not within 0.25', () => expect(within(1, 1.5, 0.25)).toBe(false) );
