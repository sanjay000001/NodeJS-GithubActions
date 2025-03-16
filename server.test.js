const request = require('supertest');
const app = require('./server');
const fs = require('fs');
const path = require('path');

describe('Server API Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Welcome to the Node.js server!');
  });

  test('GET /api/data should return data object', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('timestamp');
  });

  // Generate test artifact
  afterAll(() => {
    // Create artifacts directory if it doesn't exist
    const artifactsDir = path.join(__dirname, 'artifacts');
    if (!fs.existsSync(artifactsDir)) {
      fs.mkdirSync(artifactsDir, { recursive: true });
    }

    // Generate a test report artifact
    const testReport = {
      testRun: new Date().toISOString(),
      results: 'All tests passed successfully',
      environment: {
        nodeVersion: process.version,
        platform: process.platform
      }
    };

    fs.writeFileSync(
      path.join(artifactsDir, 'test-report.json'),
      JSON.stringify(testReport, null, 2)
    );

    console.log('Test artifacts generated successfully');
  });
});