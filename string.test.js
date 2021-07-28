const { stringLength, reverseString } = require('./string');

describe('String characters', () => {
  it('Should Return the length of the string', () => {
    const result = stringLength('hello');
    expect(result).toBe(5);
  });

  it('Should throw out an error', () => {
    expect(() => stringLength('')).toThrow();
  });

  it('Should throw out an error', () => {
    expect(() =>
      stringLength('Heloo there my name is caleb buyana and i love you all')
    ).toThrow();
  });
});

describe('Reverse', () => {
  it('Should reverse the string', () => {
    const result = reverseString('hello');
    expect(result).toBe('olleh');
  });
});
