// import { stringLength } from './string';
const stringLength = require('./string');

test('Return the length of the string', () => {
  const result = stringLength('hello');
  expect(result).toBe(5);
});

test('Return the length of the string', () => {
  expect(() => stringLength('')).toThrow();
});

test('Return the length of the string', () => {
  expect(() =>
    stringLength('Heloo there my name is caleb buyana and i love you all')
  ).toThrow();
});
