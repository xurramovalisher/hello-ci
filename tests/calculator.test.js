const { add, subtract } = require('../src/calculator');
test('2 + 3 = 5', () => { expect(add(2, 3)).toBe(5); });
test('10 - 4 = 6', () => { expect(subtract(10, 4)).toBe(6); });
