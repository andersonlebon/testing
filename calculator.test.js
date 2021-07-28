const Calculator = require('./calculator');
const calculator = new Calculator();

describe('Addition', () => {
  it('Temr1 should be a number', () => {
    expect(() => calculator.add('a', 11)).toThrow();
  });
  it('Temr2 should be a number', () => {
    expect(() => calculator.add(11, 'a')).toThrow();
  });
  it('Temr1 and term2 should be a numbers', () => {
    expect(() => calculator.add('a', '55')).toThrow();
  });
  it('Should return the Addition', () => {
    const result = calculator.add(22, 11);
    expect(result).toBe(33);
  });
});
