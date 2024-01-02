// Import Express
import express from 'express';

// Set countries express router
const countries = express.Router();

// Define countries route
countries.get('/', (req, res) => {
  res.send('Countries Page!');
});

// Export countries router
export default countries;
