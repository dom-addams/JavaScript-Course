// import express
import express from 'express';

const app = express();
const port = 3000;

// define reoute handler
app.get('/api', (req, res) => {
  res.send('Hello, World');
});

// start express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
