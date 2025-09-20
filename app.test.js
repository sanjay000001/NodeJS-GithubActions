const { y, abc } = require('./abc');
const { x, xyz } = require('./xyz');

describe('App Integration Tests', () => {
  // Test the imported values
  test('should import correct values from abc module', () => {
    expect(y).toBe(20);
    expect(typeof abc).toBe('function');
  });

  test('should import correct values from xyz module', () => {
    expect(x).toBe(10);
    expect(typeof xyz).toBe('function');
  });

  // Test module functions
  test('abc function should execute without errors', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    abc();
    expect(consoleSpy).toHaveBeenCalledWith('abc');
    consoleSpy.mockRestore();
  });

  test('xyz function should execute without errors', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    xyz();
    expect(consoleSpy).toHaveBeenCalledWith('xyz');
    consoleSpy.mockRestore();
  });

  test('should handle module integration correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    // Test that both modules work together
    abc();
    xyz();
    
    expect(consoleSpy).toHaveBeenCalledWith('abc');
    expect(consoleSpy).toHaveBeenCalledWith('xyz');
    
    consoleSpy.mockRestore();
  });
});
