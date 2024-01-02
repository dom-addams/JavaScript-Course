// Import Express
import express from 'express';

// Set Oceans express router
const oceans = express.Router();

// Define Oceans route
oceans.get('/', (req, res) => {
  res.send('Oceans Page!');
});

// Export Oceans router
export default oceans;
