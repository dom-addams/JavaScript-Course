// Import Express
import express from 'express';

// Set continents express router
const continents = express.Router();

// Define continents route
continents.get('/', (req, res) => {
  res.send('Continents Page!');
});

// Export continents router
export default continents;
