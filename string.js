const stringLength = (string) => {
  if (string.length < 1 || string.length >= 10) {
    throw new Error('this condition is invalid');
  }
  return string.length;
};

const reverseString = (string) => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
};

exports.reverseString = reverseString;
exports.stringLength = stringLength;
