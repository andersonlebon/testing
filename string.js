const stringLength = (string) => {
  if (string.length < 1 || string.length >= 10) {
    throw new Error('this condition is invalid');
  }
  return string.length;
};

const reverseString = (string) => {
  return string.revese();
};

exports.reverseString = reverseString;
exports.stringLength = stringLength;
