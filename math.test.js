const { add, addMultiple } = require('./math');

describe('Addition Function Tests', () => {
  test('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 15)).toBe(25);
    expect(add(100, 200)).toBe(300);
  });

  test('should handle negative numbers correctly', () => {
    expect(add(-5, 3)).toBe(-2);
    expect(add(-10, -20)).toBe(-30);
    expect(add(15, -10)).toBe(5);
  });

  test('should handle zero values correctly', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 5)).toBe(5);
    expect(add(10, 0)).toBe(10);
  });

  test('should handle decimal numbers correctly', () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(3.14, 2.86)).toBeCloseTo(6);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('should throw error for invalid input types', () => {
    expect(() => add('5', 3)).toThrow('Both arguments must be numbers');
    expect(() => add(5, '3')).toThrow('Both arguments must be numbers');
    expect(() => add(null, 5)).toThrow('Both arguments must be numbers');
    expect(() => add(undefined, 5)).toThrow('Both arguments must be numbers');
    expect(() => add([], 5)).toThrow('Both arguments must be numbers');
  });
});

describe('AddMultiple Function Tests', () => {
  test('should add multiple positive numbers', () => {
    expect(addMultiple(1, 2, 3, 4, 5)).toBe(15);
    expect(addMultiple(10, 20, 30)).toBe(60);
  });

  test('should handle empty array', () => {
    expect(addMultiple()).toBe(0);
  });

  test('should handle single number', () => {
    expect(addMultiple(42)).toBe(42);
  });

  test('should handle mix of positive and negative numbers', () => {
    expect(addMultiple(10, -5, 3, -2)).toBe(6);
  });

  test('should throw error for invalid types in array', () => {
    expect(() => addMultiple(1, 2, '3')).toThrow('All arguments must be numbers');
    expect(() => addMultiple(1, null, 3)).toThrow('All arguments must be numbers');
  });
});
