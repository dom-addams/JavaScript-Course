// import express
import express from 'express';

// Define students express router
const students = express.Router();

// Define students route
students.get('/', (req, res) => {
  res.send('Students Page!');
});

// Export students router
export default students;
