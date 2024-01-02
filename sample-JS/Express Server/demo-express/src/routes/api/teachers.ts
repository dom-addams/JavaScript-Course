// Import Express
import express from 'express';

// Set teachers express router
const teachers = express.Router();

// Define teachers route
teachers.get('/', (req, res) => {
  res.send('Teachers Page!');
});

// Export teachers router
export default teachers;
