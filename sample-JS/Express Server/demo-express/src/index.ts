// import express
import express from 'express';

// import routes index file
import routes from './routes/index';

// configure express app
const app = express();
const port = 3000;

// use routes index file with api path
app.use('/api', routes);

// start express server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
