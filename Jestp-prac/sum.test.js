import { sum } from './sum.js';

test('properly adds numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
