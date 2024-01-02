// Import Express
import express from 'express';

// Import logger middleware
import logger from './utilities/logger';

// Import routes index file
import routes from './routes/index';

// Configure Express
const app = express();
const port = 3000;

// Create default route to use routes index file with api path
app.use('/api', logger, routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
