class Calculator {
  add(term1, term2) {
    if (!term1 || !term1) {
      throw new Error('Term1 and term2 should be Numbers');
    }
    return term1 + term2;
  }
  substract(term1, term2) {
    if (!term1 || !term1) {
      throw new Error('Term1 and term2 should be Numbers');
    }
    return term1 - term2;
  }
  multiply(term1, term2) {
    if (!term1 || !term1) {
      throw new Error('Term1 and term2 should be Numbers');
    }
    return term1 * term2;
  }
  divide(term1, term2) {
    if (!term1 || !term1) {
      throw new Error('Term1 and term2 should be Numbers');
    }
    return term1 / term2;
  }
}
