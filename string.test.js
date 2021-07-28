// import { stringLength } from './string';
const stringLength = require('./string');

test('Return the length of the string', () => {
  const result = stringLength('hello');
  expect(result).toBe(5);
});
