const { x, xyz } = require('./xyz');

describe('XYZ Module Tests', () => {
  test('should export correct value for x', () => {
    expect(x).toBe(10);
    expect(typeof x).toBe('number');
  });

  test('should export xyz function', () => {
    expect(typeof xyz).toBe('function');
  });

  test('xyz function should log correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    xyz();
    expect(consoleSpy).toHaveBeenCalledWith('xyz');
    consoleSpy.mockRestore();
  });

  test('module should have correct exports structure', () => {
    const xyzModule = require('./xyz');
    expect(xyzModule).toHaveProperty('x', 10);
    expect(xyzModule).toHaveProperty('xyz');
    expect(Object.keys(xyzModule)).toEqual(['x', 'xyz']);
  });

  test('should handle multiple function calls', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    xyz();
    xyz();
    
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'xyz');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'xyz');
    
    consoleSpy.mockRestore();
  });
});
