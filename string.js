module.exports = function stringLength(string) {
  if (string.length < 1 || string.length >= 10) {
    throw new error('this condition is invalid');
  }
  return string.length;
};
