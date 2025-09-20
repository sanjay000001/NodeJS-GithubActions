/**
 * Simple addition utility functions
 */

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function addMultiple(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new Error('All arguments must be numbers');
    }
    return sum + num;
  }, 0);
}

module.exports = { add, addMultiple };
