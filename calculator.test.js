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

describe('Substraction', () => {
  it('Temr1 should be a number', () => {
    expect(() => calculator.substract('a', 11)).toThrow();
  });
  it('Temr2 should be a number', () => {
    expect(() => calculator.substract(11, 'a')).toThrow();
  });
  it('Temr1 and term2 should be a numbers', () => {
    expect(() => calculator.substract('a', '55')).toThrow();
  });
  it('Should return the Substraction', () => {
    const result = calculator.substract(22, 11);
    expect(result).toBe(11);
  });
});

describe('Multiplication', () => {
  it('Temr1 should be a number', () => {
    expect(() => calculator.multiply('a', 11)).toThrow();
  });
  it('Temr2 should be a number', () => {
    expect(() => calculator.multiply(11, 'a')).toThrow();
  });
  it('Temr1 and term2 should be a numbers', () => {
    expect(() => calculator.multiply('a', '55')).toThrow();
  });
  it('Should return the Mulptiplication', () => {
    const result = calculator.multiply(2, 11);
    expect(result).toBe(22);
  });
});

describe('Division', () => {
  it('Temr1 should be a number', () => {
    expect(() => calculator.divide('a', 11)).toThrow();
  });
  it('Temr2 should be a number', () => {
    expect(() => calculator.divide(11, 'a')).toThrow();
  });
  it('Temr1 and term2 should be a numbers', () => {
    expect(() => calculator.divide('a', '55')).toThrow();
  });
  it('Temr2 should not be 0', () => {
    expect(() => calculator.divide(1077, 0)).toThrow();
  });
  it('Should return the Division', () => {
    const result = calculator.divide(22, 11);
    expect(result).toBeCloseTo(2);
  });
});
