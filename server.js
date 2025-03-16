const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js server!' });
});

app.get('/api/data', (req, res) => {
  res.json({ 
    data: 'This is sample data',
    timestamp: new Date().toISOString()
  });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export for testing
module.exports = app;