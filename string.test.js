const { stringLength, reverseString } = require('./string');

test('Return the length of the string', () => {
  const result = stringLength('hello');
  expect(result).toBe(5);
});

test('Should throw out an error', () => {
  expect(() => stringLength('')).toThrow();
});

test('Should throw out an error', () => {
  expect(() =>
    stringLength('Heloo there my name is caleb buyana and i love you all')
  ).toThrow();
});

test('Should reverse the string', () => {
  const result = reverseString('hello');
  expect(result).toBe('olleh');
});
