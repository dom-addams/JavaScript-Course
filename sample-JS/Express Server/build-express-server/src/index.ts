// import express
import express from 'express';

// setup express app
const app = express();
const port = 3000;

// Define API endpoint
app.get('/api', (req, res) => {
  res.send('Hello, World');
});

// Setup lisnter
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
