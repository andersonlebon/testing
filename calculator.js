module.exports = class Calculator {
  add(term1, term2) {
    if (isNaN(term1) || isNaN(term2)) {
      throw new Error('Term1 and term2 should be Numbers');
    }

    return term1 + term2;
  }
  substract(term1, term2) {
    if (isNaN(term1) || isNaN(term2)) {
      throw new Error('Term1 and term2 should be Numbers');
    }

    return term1 - term2;
  }
  multiply(term1, term2) {
    if (isNaN(term1) || isNaN(term2)) {
      throw new Error('Term1 and term2 should be Numbers');
    }

    return term1 * term2;
  }
  divide(term1, term2) {
    if (isNaN(term1) || isNaN(term2)) {
      throw new Error('Term1 and term2 should be Numbers');
    }
    if (term2 === 0) {
      throw new Error('Term2 should not be 0');
    }
    return term1 / term2;
  }
};
