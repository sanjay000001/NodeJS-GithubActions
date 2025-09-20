const fs = require('fs');
const path = require('path');

describe('App.js Integration Tests', () => {
  let originalConsoleLog;
  let consoleLogs = [];

  beforeEach(() => {
    // Mock console.log to capture output
    originalConsoleLog = console.log;
    consoleLogs = [];
    console.log = (...args) => {
      consoleLogs.push(args.join(' '));
      originalConsoleLog(...args);
    };
  });

  afterEach(() => {
    // Restore original console.log
    console.log = originalConsoleLog;
  });

  test('should execute app.js and produce expected output', () => {
    // Clear the module cache to ensure fresh execution
    delete require.cache[require.resolve('./app')];
    delete require.cache[require.resolve('./abc')];
    delete require.cache[require.resolve('./xyz')];
    
    // Require app.js which should execute the main logic
    require('./app');
    
    // Verify that the expected logs were produced
    expect(consoleLogs).toContain('app');
    expect(consoleLogs.some(log => log.includes('20'))).toBe(true);
    expect(consoleLogs.some(log => log.includes('10'))).toBe(true);
    expect(consoleLogs).toContain('abc');
    expect(consoleLogs).toContain('xyz');
  });

  test('should properly import and use modules', () => {
    // Import the modules directly
    const { y, abc } = require('./abc');
    const { x, xyz } = require('./xyz');

    // Test the imports work as expected in app context
    expect(y).toBe(20);
    expect(x).toBe(10);
    expect(typeof abc).toBe('function');
    expect(typeof xyz).toBe('function');
  });

  test('should handle module execution flow', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Clear module cache and re-require
    delete require.cache[require.resolve('./abc')];
    delete require.cache[require.resolve('./xyz')];
    
    const { abc } = require('./abc');
    const { xyz } = require('./xyz');
    
    // Execute functions as app.js does
    abc();
    xyz();
    
    expect(consoleSpy).toHaveBeenCalledWith('abc');
    expect(consoleSpy).toHaveBeenCalledWith('xyz');
    
    consoleSpy.mockRestore();
  });
});
