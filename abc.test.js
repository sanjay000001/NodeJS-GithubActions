const { y, abc } = require('./abc');

describe('ABC Module Tests', () => {
  test('should export correct value for y', () => {
    expect(y).toBe(20);
    expect(typeof y).toBe('number');
  });

  test('should export abc function', () => {
    expect(typeof abc).toBe('function');
  });

  test('abc function should log correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    abc();
    expect(consoleSpy).toHaveBeenCalledWith('abc');
    consoleSpy.mockRestore();
  });

  test('module should have correct exports structure', () => {
    const abcModule = require('./abc');
    expect(abcModule).toHaveProperty('y', 20);
    expect(abcModule).toHaveProperty('abc');
    expect(Object.keys(abcModule)).toEqual(['y', 'abc']);
  });
});
